

export class ShowInstanceExtendProductInfoRequest {
    private 'instance_id'?: string;
    public type?: ShowInstanceExtendProductInfoRequestTypeEnum | string;
    public engine?: ShowInstanceExtendProductInfoRequestEngineEnum | string;
    public constructor(instanceId?: string, type?: string, engine?: string) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
        this['engine'] = engine;
    }
    public withInstanceId(instanceId: string): ShowInstanceExtendProductInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: ShowInstanceExtendProductInfoRequestTypeEnum | string): ShowInstanceExtendProductInfoRequest {
        this['type'] = type;
        return this;
    }
    public withEngine(engine: ShowInstanceExtendProductInfoRequestEngineEnum | string): ShowInstanceExtendProductInfoRequest {
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
    RABBITMQ = 'rabbitmq'
}
