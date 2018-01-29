/**
 * 路由配置文件（按需加载）
 * 配置格式
 * {
 *    path:"/example",
 *    models:()=>[import('./models/example')]
 *    component:()=>import('../router/example')
 * }
 */
const routers = [
    {
        path:"/user",
        component:()=>import('../routes/user')
    }
]

export default routers;