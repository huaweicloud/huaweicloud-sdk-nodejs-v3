

export class ShowEngineInstanceExtendProductInfoForRocketMqRequest {
    private 'instance_id'?: string;
    public type?: ShowEngineInstanceExtendProductInfoForRocketMqRequestTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowEngineInstanceExtendProductInfoForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: ShowEngineInstanceExtendProductInfoForRocketMqRequestTypeEnum | string): ShowEngineInstanceExtendProductInfoForRocketMqRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ShowEngineInstanceExtendProductInfoForRocketMqRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowEngineInstanceExtendProductInfoForRocketMqRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEngineInstanceExtendProductInfoForRocketMqRequestTypeEnum {
    ADVANCED = 'advanced'
}
