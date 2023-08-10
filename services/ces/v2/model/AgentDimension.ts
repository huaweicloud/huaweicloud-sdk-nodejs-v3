

export class AgentDimension {
    public name?: AgentDimensionNameEnum | string;
    public value?: string;
    private 'origin_value'?: string;
    public constructor() { 
    }
    public withName(name: AgentDimensionNameEnum | string): AgentDimension {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): AgentDimension {
        this['value'] = value;
        return this;
    }
    public withOriginValue(originValue: string): AgentDimension {
        this['origin_value'] = originValue;
        return this;
    }
    public set originValue(originValue: string  | undefined) {
        this['origin_value'] = originValue;
    }
    public get originValue(): string | undefined {
        return this['origin_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgentDimensionNameEnum {
    MOUNT_POINT = 'mount_point',
    DISK = 'disk',
    PROC = 'proc',
    GPU = 'gpu',
    RAID = 'raid'
}
