
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfAclPolicyV2Response extends SdkResponse {
    private 'acl_name'?: string;
    private 'acl_type'?: ShowDetailsOfAclPolicyV2ResponseAclTypeEnum | string;
    private 'acl_value'?: string;
    private 'entity_type'?: string;
    public id?: string;
    private 'update_time'?: Date;
    public constructor() { 
        super();
    }
    public withAclName(aclName: string): ShowDetailsOfAclPolicyV2Response {
        this['acl_name'] = aclName;
        return this;
    }
    public set aclName(aclName: string  | undefined) {
        this['acl_name'] = aclName;
    }
    public get aclName(): string | undefined {
        return this['acl_name'];
    }
    public withAclType(aclType: ShowDetailsOfAclPolicyV2ResponseAclTypeEnum | string): ShowDetailsOfAclPolicyV2Response {
        this['acl_type'] = aclType;
        return this;
    }
    public set aclType(aclType: ShowDetailsOfAclPolicyV2ResponseAclTypeEnum | string  | undefined) {
        this['acl_type'] = aclType;
    }
    public get aclType(): ShowDetailsOfAclPolicyV2ResponseAclTypeEnum | string | undefined {
        return this['acl_type'];
    }
    public withAclValue(aclValue: string): ShowDetailsOfAclPolicyV2Response {
        this['acl_value'] = aclValue;
        return this;
    }
    public set aclValue(aclValue: string  | undefined) {
        this['acl_value'] = aclValue;
    }
    public get aclValue(): string | undefined {
        return this['acl_value'];
    }
    public withEntityType(entityType: string): ShowDetailsOfAclPolicyV2Response {
        this['entity_type'] = entityType;
        return this;
    }
    public set entityType(entityType: string  | undefined) {
        this['entity_type'] = entityType;
    }
    public get entityType(): string | undefined {
        return this['entity_type'];
    }
    public withId(id: string): ShowDetailsOfAclPolicyV2Response {
        this['id'] = id;
        return this;
    }
    public withUpdateTime(updateTime: Date): ShowDetailsOfAclPolicyV2Response {
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
export enum ShowDetailsOfAclPolicyV2ResponseAclTypeEnum {
    PERMIT = 'PERMIT',
    DENY = 'DENY'
}
