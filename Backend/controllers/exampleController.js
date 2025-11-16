// Example Controller
// Đây là file mẫu cho controller

exports.getAll = async (req, res) => {
  try {
    // Logic để lấy dữ liệu
    res.status(200).json({
      success: true,
      message: 'Lấy dữ liệu thành công',
      data: []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
      error: error.message
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    // Logic để lấy dữ liệu theo ID
    res.status(200).json({
      success: true,
      message: 'Lấy dữ liệu thành công',
      data: { id }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
      error: error.message
    });
  }
};

exports.create = async (req, res) => {
  try {
    const data = req.body;
    // Logic để tạo dữ liệu mới
    res.status(201).json({
      success: true,
      message: 'Tạo dữ liệu thành công',
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
      error: error.message
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    // Logic để cập nhật dữ liệu
    res.status(200).json({
      success: true,
      message: 'Cập nhật dữ liệu thành công',
      data: { id, ...data }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
      error: error.message
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    // Logic để xóa dữ liệu
    res.status(200).json({
      success: true,
      message: 'Xóa dữ liệu thành công',
      data: { id }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server',
      error: error.message
    });
  }
};

