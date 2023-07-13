

export class ShowInstanceExtendProductInfoRequest {
    private 'instance_id': string | undefined;
    public type: ShowInstanceExtendProductInfoRequestTypeEnum;
    public engine: ShowInstanceExtendProductInfoRequestEngineEnum;
    public constructor(instanceId?: any, type?: any, engine?: any) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
        this['engine'] = engine;
    }
    public withInstanceId(instanceId: string): ShowInstanceExtendProductInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withType(type: ShowInstanceExtendProductInfoRequestTypeEnum): ShowInstanceExtendProductInfoRequest {
        this['type'] = type;
        return this;
    }
    public withEngine(engine: ShowInstanceExtendProductInfoRequestEngineEnum): ShowInstanceExtendProductInfoRequest {
        this['engine'] = engine;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceExtendProductInfoRequestTypeEnum {
    ADVANCED = 'advanced',
    PLATINUM = 'platinum',
    DEC = 'dec',
    EXP = 'exp'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceExtendProductInfoRequestEngineEnum {
    KAFKA = 'kafka'
}
