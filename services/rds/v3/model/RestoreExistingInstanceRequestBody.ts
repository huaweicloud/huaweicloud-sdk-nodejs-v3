import { RestoreExistingInstanceRequestBodySource } from './RestoreExistingInstanceRequestBodySource';
import { TargetInstanceRequest } from './TargetInstanceRequest';


export class RestoreExistingInstanceRequestBody {
    public source?: RestoreExistingInstanceRequestBodySource;
    public target?: TargetInstanceRequest;
    public constructor(source?: RestoreExistingInstanceRequestBodySource, target?: TargetInstanceRequest) { 
        this['source'] = source;
        this['target'] = target;
    }
    public withSource(source: RestoreExistingInstanceRequestBodySource): RestoreExistingInstanceRequestBody {
        this['source'] = source;
        return this;
    }
    public withTarget(target: TargetInstanceRequest): RestoreExistingInstanceRequestBody {
        this['target'] = target;
        return this;
    }
}