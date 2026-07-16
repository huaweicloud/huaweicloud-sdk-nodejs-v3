import { Os } from './Os';
import { PoolResourceFlavorExtendParams } from './PoolResourceFlavorExtendParams';


export class PoolResourceFlavor {
    public flavor?: string;
    public count?: number;
    public maxCount?: number;
    public extendParams?: PoolResourceFlavorExtendParams;
    public os?: Os;
    public constructor(flavor?: string, count?: number) { 
        this['flavor'] = flavor;
        this['count'] = count;
    }
    public withFlavor(flavor: string): PoolResourceFlavor {
        this['flavor'] = flavor;
        return this;
    }
    public withCount(count: number): PoolResourceFlavor {
        this['count'] = count;
        return this;
    }
    public withMaxCount(maxCount: number): PoolResourceFlavor {
        this['maxCount'] = maxCount;
        return this;
    }
    public withExtendParams(extendParams: PoolResourceFlavorExtendParams): PoolResourceFlavor {
        this['extendParams'] = extendParams;
        return this;
    }
    public withOs(os: Os): PoolResourceFlavor {
        this['os'] = os;
        return this;
    }
}