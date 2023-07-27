

export class ApiAclCreate {
    private 'acl_name'?: string;
    private 'acl_type'?: ApiAclCreateAclTypeEnum | string;
    private 'acl_value'?: string;
    private 'entity_type'?: ApiAclCreateEntityTypeEnum | string;
    public constructor(aclName?: string, aclType?: string, aclValue?: string, entityType?: string) { 
        this['acl_name'] = aclName;
        this['acl_type'] = aclType;
        this['acl_value'] = aclValue;
        this['entity_type'] = entityType;
    }
    public withAclName(aclName: string): ApiAclCreate {
        this['acl_name'] = aclName;
        return this;
    }
    public set aclName(aclName: string  | undefined) {
        this['acl_name'] = aclName;
    }
    public get aclName(): string | undefined {
        return this['acl_name'];
    }
    public withAclType(aclType: ApiAclCreateAclTypeEnum | string): ApiAclCreate {
        this['acl_type'] = aclType;
        return this;
    }
    public set aclType(aclType: ApiAclCreateAclTypeEnum | string  | undefined) {
        this['acl_type'] = aclType;
    }
    public get aclType(): ApiAclCreateAclTypeEnum | string | undefined {
        return this['acl_type'];
    }
    public withAclValue(aclValue: string): ApiAclCreate {
        this['acl_value'] = aclValue;
        return this;
    }
    public set aclValue(aclValue: string  | undefined) {
        this['acl_value'] = aclValue;
    }
    public get aclValue(): string | undefined {
        return this['acl_value'];
    }
    public withEntityType(entityType: ApiAclCreateEntityTypeEnum | string): ApiAclCreate {
        this['entity_type'] = entityType;
        return this;
    }
    public set entityType(entityType: ApiAclCreateEntityTypeEnum | string  | undefined) {
        this['entity_type'] = entityType;
    }
    public get entityType(): ApiAclCreateEntityTypeEnum | string | undefined {
        return this['entity_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiAclCreateAclTypeEnum {
    PERMIT = 'PERMIT',
    DENY = 'DENY'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiAclCreateEntityTypeEnum {
    IP = 'IP',
    DOMAIN = 'DOMAIN',
    DOMAIN_ID = 'DOMAIN_ID'
}
