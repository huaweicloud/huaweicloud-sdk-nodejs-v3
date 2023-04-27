import { AccessConfigFormatMutil } from './AccessConfigFormatMutil';
import { AccessConfigFormatSingle } from './AccessConfigFormatSingle';


export class AccessConfigFormat {
    public single?: AccessConfigFormatSingle;
    public multi?: AccessConfigFormatMutil;
    public constructor() { 
    }
    public withSingle(single: AccessConfigFormatSingle): AccessConfigFormat {
        this['single'] = single;
        return this;
    }
    public withMulti(multi: AccessConfigFormatMutil): AccessConfigFormat {
        this['multi'] = multi;
        return this;
    }
}