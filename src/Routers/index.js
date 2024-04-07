import { HeadOnly } from '../components/Layout';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';

// publish router
const publicRouter = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Upload', component: Upload, layout: HeadOnly },
];

const privateRouter = [];
export { publicRouter, privateRouter };
