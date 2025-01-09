

export class Target {
    private 'target_id'?: string;
    private 'target_name'?: string;
    private 'target_type'?: TargetTargetTypeEnum | string;
    public constructor() { 
    }
    public withTargetId(targetId: string): Target {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetName(targetName: string): Target {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): string | undefined {
        return this['target_name'];
    }
    public withTargetType(targetType: TargetTargetTypeEnum | string): Target {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: TargetTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): TargetTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TargetTargetTypeEnum {
    INSTANCE = 'INSTANCE',
    DESKTOPSPOOL = 'DESKTOPSPOOL',
    USER = 'USER',
    CLIENTIP = 'CLIENTIP',
    OU = 'OU',
    USERGROUP = 'USERGROUP',
    ALL = 'ALL'
}
