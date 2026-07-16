import { PoolResourceFlavorCount } from './PoolResourceFlavorCount';


export class PoolStatusResources {
    public creating?: PoolResourceFlavorCount;
    public available?: PoolResourceFlavorCount;
    public abnormal?: PoolResourceFlavorCount;
    public deleting?: PoolResourceFlavorCount;
    public constructor() { 
    }
    public withCreating(creating: PoolResourceFlavorCount): PoolStatusResources {
        this['creating'] = creating;
        return this;
    }
    public withAvailable(available: PoolResourceFlavorCount): PoolStatusResources {
        this['available'] = available;
        return this;
    }
    public withAbnormal(abnormal: PoolResourceFlavorCount): PoolStatusResources {
        this['abnormal'] = abnormal;
        return this;
    }
    public withDeleting(deleting: PoolResourceFlavorCount): PoolStatusResources {
        this['deleting'] = deleting;
        return this;
    }
}