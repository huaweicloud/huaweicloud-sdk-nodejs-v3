import { AccessConfigFormatMutilCreate } from './AccessConfigFormatMutilCreate';
import { AccessConfigFormatSingleCreate } from './AccessConfigFormatSingleCreate';


export class AccessConfigFormatCreate {
    public single?: AccessConfigFormatSingleCreate;
    public multi?: AccessConfigFormatMutilCreate;
    public constructor() { 
    }
    public withSingle(single: AccessConfigFormatSingleCreate): AccessConfigFormatCreate {
        this['single'] = single;
        return this;
    }
    public withMulti(multi: AccessConfigFormatMutilCreate): AccessConfigFormatCreate {
        this['multi'] = multi;
        return this;
    }
}