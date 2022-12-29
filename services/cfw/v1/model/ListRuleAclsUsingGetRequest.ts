

export class ListRuleAclsUsingGetRequest {
    private 'project_id': string | undefined;
    private 'object_id': string | undefined;
    public type?: ListRuleAclsUsingGetRequestTypeEnum;
    public protocol?: ListRuleAclsUsingGetRequestProtocolEnum;
    public ip?: string;
    public name?: string;
    public direction?: number;
    public status?: ListRuleAclsUsingGetRequestStatusEnum;
    private 'action_type'?: ListRuleAclsUsingGetRequestActionTypeEnum | undefined;
    private 'address_type'?: ListRuleAclsUsingGetRequestAddressTypeEnum | undefined;
    public limit: number;
    public offset: number;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public constructor(projectId?: any, objectId?: any, limit?: any, offset?: any) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListRuleAclsUsingGetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListRuleAclsUsingGetRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withType(type: ListRuleAclsUsingGetRequestTypeEnum): ListRuleAclsUsingGetRequest {
        this['type'] = type;
        return this;
    }
    public withProtocol(protocol: ListRuleAclsUsingGetRequestProtocolEnum): ListRuleAclsUsingGetRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withIp(ip: string): ListRuleAclsUsingGetRequest {
        this['ip'] = ip;
        return this;
    }
    public withName(name: string): ListRuleAclsUsingGetRequest {
        this['name'] = name;
        return this;
    }
    public withDirection(direction: number): ListRuleAclsUsingGetRequest {
        this['direction'] = direction;
        return this;
    }
    public withStatus(status: ListRuleAclsUsingGetRequestStatusEnum): ListRuleAclsUsingGetRequest {
        this['status'] = status;
        return this;
    }
    public withActionType(actionType: ListRuleAclsUsingGetRequestActionTypeEnum): ListRuleAclsUsingGetRequest {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: ListRuleAclsUsingGetRequestActionTypeEnum | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType() {
        return this['action_type'];
    }
    public withAddressType(addressType: ListRuleAclsUsingGetRequestAddressTypeEnum): ListRuleAclsUsingGetRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: ListRuleAclsUsingGetRequestAddressTypeEnum | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
        return this['address_type'];
    }
    public withLimit(limit: number): ListRuleAclsUsingGetRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRuleAclsUsingGetRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRuleAclsUsingGetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListRuleAclsUsingGetRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRuleAclsUsingGetRequestTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ListRuleAclsUsingGetRequestProtocolEnum {
    NUMBER_6 = 6,
    NUMBER_17 = 17,
    NUMBER_1 = 1,
    NUMBER_58 = 58
}
/**
    * @export
    * @enum {string}
    */
export enum ListRuleAclsUsingGetRequestStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum ListRuleAclsUsingGetRequestActionTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum ListRuleAclsUsingGetRequestAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
