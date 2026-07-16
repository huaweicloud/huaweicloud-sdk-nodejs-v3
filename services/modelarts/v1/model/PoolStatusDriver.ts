import { PoolDriverStatus } from './PoolDriverStatus';


export class PoolStatusDriver {
    public gpu?: PoolDriverStatus;
    public npu?: PoolDriverStatus;
    public constructor() { 
    }
    public withGpu(gpu: PoolDriverStatus): PoolStatusDriver {
        this['gpu'] = gpu;
        return this;
    }
    public withNpu(npu: PoolDriverStatus): PoolStatusDriver {
        this['npu'] = npu;
        return this;
    }
}