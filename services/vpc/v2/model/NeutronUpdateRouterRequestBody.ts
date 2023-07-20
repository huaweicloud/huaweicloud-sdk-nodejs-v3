import { NeutronUpdateRouterOption } from './NeutronUpdateRouterOption';


export class NeutronUpdateRouterRequestBody {
    public router?: NeutronUpdateRouterOption;
    public constructor(router?: NeutronUpdateRouterOption) { 
        this['router'] = router;
    }
    public withRouter(router: NeutronUpdateRouterOption): NeutronUpdateRouterRequestBody {
        this['router'] = router;
        return this;
    }
}