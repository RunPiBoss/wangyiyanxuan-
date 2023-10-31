// 导入的名字不一定要和组件的名称或name一致
import AppBanner from './AppBanner.vue'
import AppMore from './AppMore.vue'
import AppSkeletons from './AppSkeleton.vue'

export default {
    install(app) {
        // 全局注册组件，两个参数，第一个是导入的名字.name，第二个是导入的名字
        app.component(AppBanner.name, AppBanner);
        app.component(AppMore.name, AppMore);
        app.component(AppSkeletons.name, AppSkeletons);
    }
}