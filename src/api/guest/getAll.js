const GuestModel = require("../../models/guest");
const getPage = require("../../utils/getPage");
const PAGE_SIZE = 10;

const getAll = (req, res, next) => {
  const { page } = req.query;
  const { skip, limit } = getPage(page, PAGE_SIZE);
  const query = {};

  GuestModel.find(query)
    .populate("bought.product")
    .skip(skip)
    .limit(limit)
    .then((resData) => {
      if (resData) {
        GuestModel.countDocuments(query)
          .then((count) => {
            if (count || count === 0) {
              res.json({
                status: true,
                message: "Lấy khách hàng thành công!",
                guests: resData,
                currentPage: parseInt(page),
                totalPage: Math.ceil(count / PAGE_SIZE),
                totalGuests: count,
              });
            } else {
              req.err = "Lỗi lấy khách hàng!";
              next("last");
            }
          });
      } else {
        req.err = "Lỗi lấy khách hàng!";
        next("last");
      }
    })
    .catch((err) => {
      req.err = `Lỗi lấy khách hàng! + ${err}`;
      next("last");
    });
};

module.exports = getAll;
