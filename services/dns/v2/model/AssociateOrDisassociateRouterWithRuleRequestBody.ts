import { RouterForRule } from './RouterForRule';


export class AssociateOrDisassociateRouterWithRuleRequestBody {
    public router?: RouterForRule;
    public constructor(router?: RouterForRule) { 
        this['router'] = router;
    }
    public withRouter(router: RouterForRule): AssociateOrDisassociateRouterWithRuleRequestBody {
        this['router'] = router;
        return this;
    }
}