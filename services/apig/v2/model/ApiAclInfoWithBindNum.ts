

export class ApiAclInfoWithBindNum {
    private 'acl_name'?: string;
    private 'acl_type'?: ApiAclInfoWithBindNumAclTypeEnum | string;
    private 'acl_value'?: string;
    private 'bind_num'?: number;
    private 'entity_type'?: string;
    public id?: string;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withAclName(aclName: string): ApiAclInfoWithBindNum {
        this['acl_name'] = aclName;
        return this;
    }
    public set aclName(aclName: string  | undefined) {
        this['acl_name'] = aclName;
    }
    public get aclName(): string | undefined {
        return this['acl_name'];
    }
    public withAclType(aclType: ApiAclInfoWithBindNumAclTypeEnum | string): ApiAclInfoWithBindNum {
        this['acl_type'] = aclType;
        return this;
    }
    public set aclType(aclType: ApiAclInfoWithBindNumAclTypeEnum | string  | undefined) {
        this['acl_type'] = aclType;
    }
    public get aclType(): ApiAclInfoWithBindNumAclTypeEnum | string | undefined {
        return this['acl_type'];
    }
    public withAclValue(aclValue: string): ApiAclInfoWithBindNum {
        this['acl_value'] = aclValue;
        return this;
    }
    public set aclValue(aclValue: string  | undefined) {
        this['acl_value'] = aclValue;
    }
    public get aclValue(): string | undefined {
        return this['acl_value'];
    }
    public withBindNum(bindNum: number): ApiAclInfoWithBindNum {
        this['bind_num'] = bindNum;
        return this;
    }
    public set bindNum(bindNum: number  | undefined) {
        this['bind_num'] = bindNum;
    }
    public get bindNum(): number | undefined {
        return this['bind_num'];
    }
    public withEntityType(entityType: string): ApiAclInfoWithBindNum {
        this['entity_type'] = entityType;
        return this;
    }
    public set entityType(entityType: string  | undefined) {
        this['entity_type'] = entityType;
    }
    public get entityType(): string | undefined {
        return this['entity_type'];
    }
    public withId(id: string): ApiAclInfoWithBindNum {
        this['id'] = id;
        return this;
    }
    public withUpdateTime(updateTime: Date): ApiAclInfoWithBindNum {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiAclInfoWithBindNumAclTypeEnum {
    PERMIT = 'PERMIT',
    DENY = 'DENY'
}
