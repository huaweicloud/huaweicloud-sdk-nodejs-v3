

export class ShowProtectableRequest {
    private 'instance_id': string | undefined;
    private 'protectable_type': ShowProtectableRequestProtectableTypeEnum | undefined;
    public constructor(instanceId?: any, protectableType?: any) { 
        this['instance_id'] = instanceId;
        this['protectable_type'] = protectableType;
    }
    public withInstanceId(instanceId: string): ShowProtectableRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withProtectableType(protectableType: ShowProtectableRequestProtectableTypeEnum): ShowProtectableRequest {
        this['protectable_type'] = protectableType;
        return this;
    }
    public set protectableType(protectableType: ShowProtectableRequestProtectableTypeEnum | undefined) {
        this['protectable_type'] = protectableType;
    }
    public get protectableType() {
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
