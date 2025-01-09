

export class AutoscalePolicy {
    private 'autoscale_type'?: AutoscalePolicyAutoscaleTypeEnum | string;
    private 'max_auto_created'?: number;
    private 'min_idle'?: number;
    private 'once_auto_created'?: number;
    public constructor() { 
    }
    public withAutoscaleType(autoscaleType: AutoscalePolicyAutoscaleTypeEnum | string): AutoscalePolicy {
        this['autoscale_type'] = autoscaleType;
        return this;
    }
    public set autoscaleType(autoscaleType: AutoscalePolicyAutoscaleTypeEnum | string  | undefined) {
        this['autoscale_type'] = autoscaleType;
    }
    public get autoscaleType(): AutoscalePolicyAutoscaleTypeEnum | string | undefined {
        return this['autoscale_type'];
    }
    public withMaxAutoCreated(maxAutoCreated: number): AutoscalePolicy {
        this['max_auto_created'] = maxAutoCreated;
        return this;
    }
    public set maxAutoCreated(maxAutoCreated: number  | undefined) {
        this['max_auto_created'] = maxAutoCreated;
    }
    public get maxAutoCreated(): number | undefined {
        return this['max_auto_created'];
    }
    public withMinIdle(minIdle: number): AutoscalePolicy {
        this['min_idle'] = minIdle;
        return this;
    }
    public set minIdle(minIdle: number  | undefined) {
        this['min_idle'] = minIdle;
    }
    public get minIdle(): number | undefined {
        return this['min_idle'];
    }
    public withOnceAutoCreated(onceAutoCreated: number): AutoscalePolicy {
        this['once_auto_created'] = onceAutoCreated;
        return this;
    }
    public set onceAutoCreated(onceAutoCreated: number  | undefined) {
        this['once_auto_created'] = onceAutoCreated;
    }
    public get onceAutoCreated(): number | undefined {
        return this['once_auto_created'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AutoscalePolicyAutoscaleTypeEnum {
    ACCESS_CREATED = 'ACCESS_CREATED',
    AUTO_CREATED = 'AUTO_CREATED'
}
