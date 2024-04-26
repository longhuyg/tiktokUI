import { HeadOnly } from '../components/Layout';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import routerConfig from '../config/routers';

// publish router
const publicRouter = [
    { path: routerConfig.home, component: Home },
    { path: routerConfig.following, component: Following },
    { path: routerConfig.upload, component: Upload, layout: HeadOnly },
    { path: routerConfig.profile, component: Profile },
];

const privateRouter = [];
export { publicRouter, privateRouter };
