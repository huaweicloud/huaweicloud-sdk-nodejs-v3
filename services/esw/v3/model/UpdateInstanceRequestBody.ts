import { UpdateInstanceOption } from './UpdateInstanceOption';


export class UpdateInstanceRequestBody {
    public instance?: UpdateInstanceOption;
    public constructor(instance?: UpdateInstanceOption) { 
        this['instance'] = instance;
    }
    public withInstance(instance: UpdateInstanceOption): UpdateInstanceRequestBody {
        this['instance'] = instance;
        return this;
    }
}