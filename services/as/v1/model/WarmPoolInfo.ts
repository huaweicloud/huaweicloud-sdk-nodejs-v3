

export class WarmPoolInfo {
    private 'min_capacity'?: number;
    private 'max_capacity'?: number;
    private 'instance_init_wait_time'?: number;
    public status?: string;
    public constructor() { 
    }
    public withMinCapacity(minCapacity: number): WarmPoolInfo {
        this['min_capacity'] = minCapacity;
        return this;
    }
    public set minCapacity(minCapacity: number  | undefined) {
        this['min_capacity'] = minCapacity;
    }
    public get minCapacity(): number | undefined {
        return this['min_capacity'];
    }
    public withMaxCapacity(maxCapacity: number): WarmPoolInfo {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number  | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity(): number | undefined {
        return this['max_capacity'];
    }
    public withInstanceInitWaitTime(instanceInitWaitTime: number): WarmPoolInfo {
        this['instance_init_wait_time'] = instanceInitWaitTime;
        return this;
    }
    public set instanceInitWaitTime(instanceInitWaitTime: number  | undefined) {
        this['instance_init_wait_time'] = instanceInitWaitTime;
    }
    public get instanceInitWaitTime(): number | undefined {
        return this['instance_init_wait_time'];
    }
    public withStatus(status: string): WarmPoolInfo {
        this['status'] = status;
        return this;
    }
}