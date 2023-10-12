import { AccessConfigFormatMutil } from './AccessConfigFormatMutil';
import { AccessConfigFormatSingle } from './AccessConfigFormatSingle';


export class AccessConfigFormatUpdate {
    public single?: AccessConfigFormatSingle;
    public multi?: AccessConfigFormatMutil;
    public constructor() { 
    }
    public withSingle(single: AccessConfigFormatSingle): AccessConfigFormatUpdate {
        this['single'] = single;
        return this;
    }
    public withMulti(multi: AccessConfigFormatMutil): AccessConfigFormatUpdate {
        this['multi'] = multi;
        return this;
    }
}