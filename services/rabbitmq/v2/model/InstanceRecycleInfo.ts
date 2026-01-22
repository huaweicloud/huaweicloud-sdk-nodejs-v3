

export class InstanceRecycleInfo {
    private 'instance_id'?: string;
    public status?: string;
    public name?: string;
    public engine?: string;
    private 'in_recycle_time'?: string;
    private 'save_time'?: number;
    private 'auto_delete_time'?: string;
    private 'cost_per_hour'?: number;
    private 'error_message'?: string;
    private 'product_id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceRecycleInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): InstanceRecycleInfo {
        this['status'] = status;
        return this;
    }
    public withName(name: string): InstanceRecycleInfo {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: string): InstanceRecycleInfo {
        this['engine'] = engine;
        return this;
    }
    public withInRecycleTime(inRecycleTime: string): InstanceRecycleInfo {
        this['in_recycle_time'] = inRecycleTime;
        return this;
    }
    public set inRecycleTime(inRecycleTime: string  | undefined) {
        this['in_recycle_time'] = inRecycleTime;
    }
    public get inRecycleTime(): string | undefined {
        return this['in_recycle_time'];
    }
    public withSaveTime(saveTime: number): InstanceRecycleInfo {
        this['save_time'] = saveTime;
        return this;
    }
    public set saveTime(saveTime: number  | undefined) {
        this['save_time'] = saveTime;
    }
    public get saveTime(): number | undefined {
        return this['save_time'];
    }
    public withAutoDeleteTime(autoDeleteTime: string): InstanceRecycleInfo {
        this['auto_delete_time'] = autoDeleteTime;
        return this;
    }
    public set autoDeleteTime(autoDeleteTime: string  | undefined) {
        this['auto_delete_time'] = autoDeleteTime;
    }
    public get autoDeleteTime(): string | undefined {
        return this['auto_delete_time'];
    }
    public withCostPerHour(costPerHour: number): InstanceRecycleInfo {
        this['cost_per_hour'] = costPerHour;
        return this;
    }
    public set costPerHour(costPerHour: number  | undefined) {
        this['cost_per_hour'] = costPerHour;
    }
    public get costPerHour(): number | undefined {
        return this['cost_per_hour'];
    }
    public withErrorMessage(errorMessage: string): InstanceRecycleInfo {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withProductId(productId: string): InstanceRecycleInfo {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
}