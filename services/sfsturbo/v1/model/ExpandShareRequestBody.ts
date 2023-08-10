import { Extend } from './Extend';


export class ExpandShareRequestBody {
    public extend?: Extend;
    public constructor(extend?: Extend) { 
        this['extend'] = extend;
    }
    public withExtend(extend: Extend): ExpandShareRequestBody {
        this['extend'] = extend;
        return this;
    }
}