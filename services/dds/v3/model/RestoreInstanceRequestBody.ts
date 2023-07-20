import { Source } from './Source';
import { Target } from './Target';


export class RestoreInstanceRequestBody {
    public source?: Source;
    public target?: Target;
    public constructor(source?: Source, target?: Target) { 
        this['source'] = source;
        this['target'] = target;
    }
    public withSource(source: Source): RestoreInstanceRequestBody {
        this['source'] = source;
        return this;
    }
    public withTarget(target: Target): RestoreInstanceRequestBody {
        this['target'] = target;
        return this;
    }
}