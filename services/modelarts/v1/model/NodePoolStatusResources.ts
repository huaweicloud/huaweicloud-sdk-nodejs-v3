import { PoolResourceFlavorCount } from './PoolResourceFlavorCount';


export class NodePoolStatusResources {
    public creating?: PoolResourceFlavorCount;
    public available?: PoolResourceFlavorCount;
    public abnormal?: PoolResourceFlavorCount;
    public deleting?: PoolResourceFlavorCount;
    public constructor() { 
    }
    public withCreating(creating: PoolResourceFlavorCount): NodePoolStatusResources {
        this['creating'] = creating;
        return this;
    }
    public withAvailable(available: PoolResourceFlavorCount): NodePoolStatusResources {
        this['available'] = available;
        return this;
    }
    public withAbnormal(abnormal: PoolResourceFlavorCount): NodePoolStatusResources {
        this['abnormal'] = abnormal;
        return this;
    }
    public withDeleting(deleting: PoolResourceFlavorCount): NodePoolStatusResources {
        this['deleting'] = deleting;
        return this;
    }
}