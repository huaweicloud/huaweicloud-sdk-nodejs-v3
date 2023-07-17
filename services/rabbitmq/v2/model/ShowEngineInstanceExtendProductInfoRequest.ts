

export class ShowEngineInstanceExtendProductInfoRequest {
    public engine: string;
    private 'instance_id': string | undefined;
    public type?: ShowEngineInstanceExtendProductInfoRequestTypeEnum;
    public constructor(engine?: any, instanceId?: any) { 
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
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withType(type: ShowEngineInstanceExtendProductInfoRequestTypeEnum): ShowEngineInstanceExtendProductInfoRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEngineInstanceExtendProductInfoRequestTypeEnum {
    ADVANCED = 'advanced',
    PLATINUM = 'platinum',
    DEC = 'dec',
    EXP = 'exp'
}