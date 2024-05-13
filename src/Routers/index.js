import { HeadOnly } from '../Layout';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import routerConfig from '../config';

// publish router
const publicRouter = [
    { path: routerConfig.routes.home, component: Home },
    { path: routerConfig.routes.following, component: Following },
    { path: routerConfig.routes.upload, component: Upload, layout: HeadOnly },
    { path: routerConfig.routes.profile, component: Profile },
];

const privateRouter = [];
export { publicRouter, privateRouter };
