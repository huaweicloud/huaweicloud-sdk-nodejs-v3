import { NeutronCreateRouterOption } from './NeutronCreateRouterOption';


export class NeutronCreateRouterRequestBody {
    public router?: NeutronCreateRouterOption;
    public constructor(router?: NeutronCreateRouterOption) { 
        this['router'] = router;
    }
    public withRouter(router: NeutronCreateRouterOption): NeutronCreateRouterRequestBody {
        this['router'] = router;
        return this;
    }
}