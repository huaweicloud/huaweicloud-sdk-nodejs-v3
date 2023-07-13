import { RestPicLayout } from './RestPicLayout';


export class RestPicLayoutBody {
    public restPicLayout?: RestPicLayout;
    public constructor() { 
    }
    public withRestPicLayout(restPicLayout: RestPicLayout): RestPicLayoutBody {
        this['restPicLayout'] = restPicLayout;
        return this;
    }
}