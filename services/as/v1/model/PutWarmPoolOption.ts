

export class PutWarmPoolOption {
    private 'min_capacity'?: number;
    private 'max_capacity'?: number;
    private 'instance_init_wait_time'?: number;
    public constructor() { 
    }
    public withMinCapacity(minCapacity: number): PutWarmPoolOption {
        this['min_capacity'] = minCapacity;
        return this;
    }
    public set minCapacity(minCapacity: number  | undefined) {
        this['min_capacity'] = minCapacity;
    }
    public get minCapacity(): number | undefined {
        return this['min_capacity'];
    }
    public withMaxCapacity(maxCapacity: number): PutWarmPoolOption {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number  | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity(): number | undefined {
        return this['max_capacity'];
    }
    public withInstanceInitWaitTime(instanceInitWaitTime: number): PutWarmPoolOption {
        this['instance_init_wait_time'] = instanceInitWaitTime;
        return this;
    }
    public set instanceInitWaitTime(instanceInitWaitTime: number  | undefined) {
        this['instance_init_wait_time'] = instanceInitWaitTime;
    }
    public get instanceInitWaitTime(): number | undefined {
        return this['instance_init_wait_time'];
    }
}