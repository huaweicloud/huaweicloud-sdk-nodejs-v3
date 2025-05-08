

export class ShowEngineInstanceExtendProductInfoRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public type?: ShowEngineInstanceExtendProductInfoRequestTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): ShowEngineInstanceExtendProductInfoRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ShowEngineInstanceExtendProductInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: ShowEngineInstanceExtendProductInfoRequestTypeEnum | string): ShowEngineInstanceExtendProductInfoRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ShowEngineInstanceExtendProductInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowEngineInstanceExtendProductInfoRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEngineInstanceExtendProductInfoRequestTypeEnum {
    ADVANCED = 'advanced'
}
