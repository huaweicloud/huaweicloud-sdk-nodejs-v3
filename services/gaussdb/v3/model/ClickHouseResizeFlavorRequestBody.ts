

export class ClickHouseResizeFlavorRequestBody {
    private 'flavor_ref'?: string;
    public delay?: boolean;
    private 'instance_id'?: string;
    public constructor(flavorRef?: string, delay?: boolean) { 
        this['flavor_ref'] = flavorRef;
        this['delay'] = delay;
    }
    public withFlavorRef(flavorRef: string): ClickHouseResizeFlavorRequestBody {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withDelay(delay: boolean): ClickHouseResizeFlavorRequestBody {
        this['delay'] = delay;
        return this;
    }
    public withInstanceId(instanceId: string): ClickHouseResizeFlavorRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}