export interface IMenuItem {
  name: string;
  icon: string;
  url: string;
}

export const MENU_DATA: IMenuItem[] = [
  { name: "Главная", icon: "solar:home-2-bold", url: "/" },
  { name: "Продукты", icon: "solar:shop-bold", url: "/products" },
  { name: "Оплата", icon: "fluent:payment-20-filled", url: "/payment" },
  { name: "Заказы", icon: "lets-icons:order-fill", url: "/orders" },
  { name: "Клиенты", icon: "solar:user-bold", url: "/customers" },
  {
    name: "Обратная связь",
    icon: "material-symbols:feedback-rounded",
    url: "/feedback",
  },
  { name: "Настройки", icon: "solar:settings-bold", url: "/settings" },
  { name: "Поддержка", icon: "mingcute:question-fill", url: "/help" },
];
