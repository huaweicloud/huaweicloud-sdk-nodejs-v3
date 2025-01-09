

export class UserGroupInfo {
    public name?: string;
    public id?: string;
    private 'create_time'?: string;
    public description?: string;
    private 'user_quantity'?: number;
    public parent?: UserGroupInfo;
    private 'realm_id'?: string;
    private 'platform_type'?: UserGroupInfoPlatformTypeEnum | string;
    private 'group_dn'?: string;
    public domain?: string;
    public sid?: string;
    private 'total_desktops'?: number;
    public constructor() { 
    }
    public withName(name: string): UserGroupInfo {
        this['name'] = name;
        return this;
    }
    public withId(id: string): UserGroupInfo {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: string): UserGroupInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDescription(description: string): UserGroupInfo {
        this['description'] = description;
        return this;
    }
    public withUserQuantity(userQuantity: number): UserGroupInfo {
        this['user_quantity'] = userQuantity;
        return this;
    }
    public set userQuantity(userQuantity: number  | undefined) {
        this['user_quantity'] = userQuantity;
    }
    public get userQuantity(): number | undefined {
        return this['user_quantity'];
    }
    public withParent(parent: UserGroupInfo): UserGroupInfo {
        this['parent'] = parent;
        return this;
    }
    public withRealmId(realmId: string): UserGroupInfo {
        this['realm_id'] = realmId;
        return this;
    }
    public set realmId(realmId: string  | undefined) {
        this['realm_id'] = realmId;
    }
    public get realmId(): string | undefined {
        return this['realm_id'];
    }
    public withPlatformType(platformType: UserGroupInfoPlatformTypeEnum | string): UserGroupInfo {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: UserGroupInfoPlatformTypeEnum | string  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): UserGroupInfoPlatformTypeEnum | string | undefined {
        return this['platform_type'];
    }
    public withGroupDn(groupDn: string): UserGroupInfo {
        this['group_dn'] = groupDn;
        return this;
    }
    public set groupDn(groupDn: string  | undefined) {
        this['group_dn'] = groupDn;
    }
    public get groupDn(): string | undefined {
        return this['group_dn'];
    }
    public withDomain(domain: string): UserGroupInfo {
        this['domain'] = domain;
        return this;
    }
    public withSid(sid: string): UserGroupInfo {
        this['sid'] = sid;
        return this;
    }
    public withTotalDesktops(totalDesktops: number): UserGroupInfo {
        this['total_desktops'] = totalDesktops;
        return this;
    }
    public set totalDesktops(totalDesktops: number  | undefined) {
        this['total_desktops'] = totalDesktops;
    }
    public get totalDesktops(): number | undefined {
        return this['total_desktops'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserGroupInfoPlatformTypeEnum {
    AD = 'AD',
    LOCAL = 'LOCAL'
}
