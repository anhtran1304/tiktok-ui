import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Coin from '~/pages/Coin';
import Setting from '~/pages/Setting';
import Feedback from '~/pages/Feedback';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.coin, component: Coin, layout: HeaderOnly },
    { path: config.routes.setting, component: Setting },
    { path: config.routes.feedback, component: Feedback, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
