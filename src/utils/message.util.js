import { ElMessage, ElMessageBox } from "element-plus";

export function showMessage(message, type) {
  return ElMessage({
    message,
    type,
  });
}

export function showConfirm(message, title, options) {
  return ElMessageBox.confirm(message, title, options);
}
