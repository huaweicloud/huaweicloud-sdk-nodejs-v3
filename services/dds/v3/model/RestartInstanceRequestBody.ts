

export class RestartInstanceRequestBody {
    private 'target_type'?: RestartInstanceRequestBodyTargetTypeEnum | string;
    private 'target_id'?: string;
    public constructor(targetId?: string) { 
        this['target_id'] = targetId;
    }
    public withTargetType(targetType: RestartInstanceRequestBodyTargetTypeEnum | string): RestartInstanceRequestBody {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: RestartInstanceRequestBodyTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): RestartInstanceRequestBodyTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
    public withTargetId(targetId: string): RestartInstanceRequestBody {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RestartInstanceRequestBodyTargetTypeEnum {
    MONGOS = 'mongos',
    SHARD = 'shard',
    CONFIG = 'config'
}
