

export class ApiBindAclInfo {
    private 'acl_id'?: string;
    private 'acl_name'?: string;
    private 'entity_type'?: ApiBindAclInfoEntityTypeEnum | string;
    private 'acl_type'?: ApiBindAclInfoAclTypeEnum | string;
    private 'acl_value'?: string;
    private 'env_id'?: string;
    private 'env_name'?: string;
    private 'bind_id'?: string;
    private 'bind_time'?: Date;
    public constructor() { 
    }
    public withAclId(aclId: string): ApiBindAclInfo {
        this['acl_id'] = aclId;
        return this;
    }
    public set aclId(aclId: string  | undefined) {
        this['acl_id'] = aclId;
    }
    public get aclId(): string | undefined {
        return this['acl_id'];
    }
    public withAclName(aclName: string): ApiBindAclInfo {
        this['acl_name'] = aclName;
        return this;
    }
    public set aclName(aclName: string  | undefined) {
        this['acl_name'] = aclName;
    }
    public get aclName(): string | undefined {
        return this['acl_name'];
    }
    public withEntityType(entityType: ApiBindAclInfoEntityTypeEnum | string): ApiBindAclInfo {
        this['entity_type'] = entityType;
        return this;
    }
    public set entityType(entityType: ApiBindAclInfoEntityTypeEnum | string  | undefined) {
        this['entity_type'] = entityType;
    }
    public get entityType(): ApiBindAclInfoEntityTypeEnum | string | undefined {
        return this['entity_type'];
    }
    public withAclType(aclType: ApiBindAclInfoAclTypeEnum | string): ApiBindAclInfo {
        this['acl_type'] = aclType;
        return this;
    }
    public set aclType(aclType: ApiBindAclInfoAclTypeEnum | string  | undefined) {
        this['acl_type'] = aclType;
    }
    public get aclType(): ApiBindAclInfoAclTypeEnum | string | undefined {
        return this['acl_type'];
    }
    public withAclValue(aclValue: string): ApiBindAclInfo {
        this['acl_value'] = aclValue;
        return this;
    }
    public set aclValue(aclValue: string  | undefined) {
        this['acl_value'] = aclValue;
    }
    public get aclValue(): string | undefined {
        return this['acl_value'];
    }
    public withEnvId(envId: string): ApiBindAclInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): ApiBindAclInfo {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withBindId(bindId: string): ApiBindAclInfo {
        this['bind_id'] = bindId;
        return this;
    }
    public set bindId(bindId: string  | undefined) {
        this['bind_id'] = bindId;
    }
    public get bindId(): string | undefined {
        return this['bind_id'];
    }
    public withBindTime(bindTime: Date): ApiBindAclInfo {
        this['bind_time'] = bindTime;
        return this;
    }
    public set bindTime(bindTime: Date  | undefined) {
        this['bind_time'] = bindTime;
    }
    public get bindTime(): Date | undefined {
        return this['bind_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiBindAclInfoEntityTypeEnum {
    IP = 'IP',
    DOMAIN = 'DOMAIN',
    DOMAIN_ID = 'DOMAIN_ID'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiBindAclInfoAclTypeEnum {
    PERMIT = 'PERMIT',
    DENY = 'DENY'
}
