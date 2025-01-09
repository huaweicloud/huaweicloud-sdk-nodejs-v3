

export class CreateUserGroupReq {
    private 'group_name'?: string;
    private 'platform_type'?: CreateUserGroupReqPlatformTypeEnum | string;
    public description?: string;
    public constructor(groupName?: string, platformType?: string) { 
        this['group_name'] = groupName;
        this['platform_type'] = platformType;
    }
    public withGroupName(groupName: string): CreateUserGroupReq {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withPlatformType(platformType: CreateUserGroupReqPlatformTypeEnum | string): CreateUserGroupReq {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: CreateUserGroupReqPlatformTypeEnum | string  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): CreateUserGroupReqPlatformTypeEnum | string | undefined {
        return this['platform_type'];
    }
    public withDescription(description: string): CreateUserGroupReq {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateUserGroupReqPlatformTypeEnum {
    AD = 'AD',
    LOCAL = 'LOCAL'
}
