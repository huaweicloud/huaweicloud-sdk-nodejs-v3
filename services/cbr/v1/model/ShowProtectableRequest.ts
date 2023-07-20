

export class ShowProtectableRequest {
    private 'instance_id'?: string;
    private 'protectable_type'?: ShowProtectableRequestProtectableTypeEnum | string;
    public constructor(instanceId?: string, protectableType?: string) { 
        this['instance_id'] = instanceId;
        this['protectable_type'] = protectableType;
    }
    public withInstanceId(instanceId: string): ShowProtectableRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProtectableType(protectableType: ShowProtectableRequestProtectableTypeEnum | string): ShowProtectableRequest {
        this['protectable_type'] = protectableType;
        return this;
    }
    public set protectableType(protectableType: ShowProtectableRequestProtectableTypeEnum | string  | undefined) {
        this['protectable_type'] = protectableType;
    }
    public get protectableType(): ShowProtectableRequestProtectableTypeEnum | string | undefined {
        return this['protectable_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowProtectableRequestProtectableTypeEnum {
    SERVER = 'server',
    DISK = 'disk'
}
