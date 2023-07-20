import { RestoreToExistingInstanceRequestBodySource } from './RestoreToExistingInstanceRequestBodySource';
import { RestoreToExistingInstanceRequestBodyTarget } from './RestoreToExistingInstanceRequestBodyTarget';


export class RestoreToExistingInstanceRequestBody {
    public source?: RestoreToExistingInstanceRequestBodySource;
    public target?: RestoreToExistingInstanceRequestBodyTarget;
    public constructor(source?: RestoreToExistingInstanceRequestBodySource, target?: RestoreToExistingInstanceRequestBodyTarget) { 
        this['source'] = source;
        this['target'] = target;
    }
    public withSource(source: RestoreToExistingInstanceRequestBodySource): RestoreToExistingInstanceRequestBody {
        this['source'] = source;
        return this;
    }
    public withTarget(target: RestoreToExistingInstanceRequestBodyTarget): RestoreToExistingInstanceRequestBody {
        this['target'] = target;
        return this;
    }
}