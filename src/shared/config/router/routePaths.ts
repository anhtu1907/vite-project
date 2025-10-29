// Tạo một đối tượng hằng số để định nghĩa các tuyến đường trong ứng dụng
export const AppRoutes = {
    HOME: "home",
    LOGIN: "login",
    NOTFOUND: "not_found"
} as const;

// Định nghĩa kiểu dữ liệu cho các tuyến đường dựa trên các giá trị trong đối tượng AppRoutes
type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

// Tạo một bản đồ ánh xạ các tuyến đường với các đường dẫn tương ứng
export const routePaths: Record<AppRoutes,string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.LOGIN]: '/login',

    // cuối
    [AppRoutes.NOTFOUND]: '*'
}
