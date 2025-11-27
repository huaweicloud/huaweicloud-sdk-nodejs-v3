import { L4Limit } from './L4Limit';
import { L7Limit } from './L7Limit';


export class CustomQosLimit {
    public l4?: L4Limit;
    public l7?: L7Limit;
    public constructor() { 
    }
    public withL4(l4: L4Limit): CustomQosLimit {
        this['l4'] = l4;
        return this;
    }
    public withL7(l7: L7Limit): CustomQosLimit {
        this['l7'] = l7;
        return this;
    }
}