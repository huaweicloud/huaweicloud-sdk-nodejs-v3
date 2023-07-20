import { Router } from './Router';


export class DisassociaterouterRequestBody {
    public router?: Router;
    public constructor(router?: Router) { 
        this['router'] = router;
    }
    public withRouter(router: Router): DisassociaterouterRequestBody {
        this['router'] = router;
        return this;
    }
}