import { Router } from './Router';


export class AssociateRouterRequestBody {
    public router: Router;
    public constructor(router?: any) { 
        this['router'] = router;
    }
    public withRouter(router: Router): AssociateRouterRequestBody {
        this['router'] = router;
        return this;
    }
}