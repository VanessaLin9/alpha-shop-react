export const changeStep = (step: number) => ({
  type: 'Change-Step',
  payload: step,
});

// 刪除品項
export const removeItem = (id: string) => ({
  type: 'Delete-Item',
  payload: id,
});

// 增減品項
export const updateLineItemQuantity = (id: String, quantity: number) => ({
  type: 'Update-Line-Item-Quantity',
  payload: {
    id,
    quantity,
  },
});

// Deliver Fee
export const updateShoppingFee = (shippingFee) => ({
  type: 'Deliver-Fee',
  payload: shippingFee,
});

// 購買人資料更新
export const updateUserInfo = (userInfo) => ({
  type: 'Update-User-Info',
  payload: userInfo,
});
