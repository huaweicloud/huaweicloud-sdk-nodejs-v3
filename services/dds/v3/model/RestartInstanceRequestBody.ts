

export class RestartInstanceRequestBody {
    private 'target_type'?: RestartInstanceRequestBodyTargetTypeEnum | string;
    private 'target_id'?: string;
    private 'is_serial'?: boolean;
    private 'is_force'?: boolean;
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
    public withIsSerial(isSerial: boolean): RestartInstanceRequestBody {
        this['is_serial'] = isSerial;
        return this;
    }
    public set isSerial(isSerial: boolean  | undefined) {
        this['is_serial'] = isSerial;
    }
    public get isSerial(): boolean | undefined {
        return this['is_serial'];
    }
    public withIsForce(isForce: boolean): RestartInstanceRequestBody {
        this['is_force'] = isForce;
        return this;
    }
    public set isForce(isForce: boolean  | undefined) {
        this['is_force'] = isForce;
    }
    public get isForce(): boolean | undefined {
        return this['is_force'];
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
