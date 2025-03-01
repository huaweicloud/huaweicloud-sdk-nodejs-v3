

export class ResizeInstanceOption {
    private 'target_type'?: ResizeInstanceOptionTargetTypeEnum | string;
    private 'target_id'?: string;
    private 'target_ids'?: Array<string>;
    private 'target_spec_code'?: string;
    public constructor(targetSpecCode?: string) { 
        this['target_spec_code'] = targetSpecCode;
    }
    public withTargetType(targetType: ResizeInstanceOptionTargetTypeEnum | string): ResizeInstanceOption {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: ResizeInstanceOptionTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): ResizeInstanceOptionTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
    public withTargetId(targetId: string): ResizeInstanceOption {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetIds(targetIds: Array<string>): ResizeInstanceOption {
        this['target_ids'] = targetIds;
        return this;
    }
    public set targetIds(targetIds: Array<string>  | undefined) {
        this['target_ids'] = targetIds;
    }
    public get targetIds(): Array<string> | undefined {
        return this['target_ids'];
    }
    public withTargetSpecCode(targetSpecCode: string): ResizeInstanceOption {
        this['target_spec_code'] = targetSpecCode;
        return this;
    }
    public set targetSpecCode(targetSpecCode: string  | undefined) {
        this['target_spec_code'] = targetSpecCode;
    }
    public get targetSpecCode(): string | undefined {
        return this['target_spec_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResizeInstanceOptionTargetTypeEnum {
    MONGOS = 'mongos',
    SHARD = 'shard',
    CONFIG = 'config',
    READONLY = 'readonly'
}
