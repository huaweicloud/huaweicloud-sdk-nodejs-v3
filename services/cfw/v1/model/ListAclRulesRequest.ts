

export class ListAclRulesRequest {
    private 'project_id'?: string;
    private 'object_id'?: string;
    public type?: ListAclRulesRequestTypeEnum | number;
    public protocol?: ListAclRulesRequestProtocolEnum | number;
    public ip?: string;
    public name?: string;
    public direction?: number;
    public status?: ListAclRulesRequestStatusEnum | number;
    private 'action_type'?: ListAclRulesRequestActionTypeEnum | number;
    private 'address_type'?: ListAclRulesRequestAddressTypeEnum | number;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'tags_id'?: string;
    public source?: string;
    public destination?: string;
    public service?: string;
    public application?: string;
    public constructor(projectId?: string, objectId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListAclRulesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListAclRulesRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withType(type: ListAclRulesRequestTypeEnum | number): ListAclRulesRequest {
        this['type'] = type;
        return this;
    }
    public withProtocol(protocol: ListAclRulesRequestProtocolEnum | number): ListAclRulesRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withIp(ip: string): ListAclRulesRequest {
        this['ip'] = ip;
        return this;
    }
    public withName(name: string): ListAclRulesRequest {
        this['name'] = name;
        return this;
    }
    public withDirection(direction: number): ListAclRulesRequest {
        this['direction'] = direction;
        return this;
    }
    public withStatus(status: ListAclRulesRequestStatusEnum | number): ListAclRulesRequest {
        this['status'] = status;
        return this;
    }
    public withActionType(actionType: ListAclRulesRequestActionTypeEnum | number): ListAclRulesRequest {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: ListAclRulesRequestActionTypeEnum | number  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): ListAclRulesRequestActionTypeEnum | number | undefined {
        return this['action_type'];
    }
    public withAddressType(addressType: ListAclRulesRequestAddressTypeEnum | number): ListAclRulesRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: ListAclRulesRequestAddressTypeEnum | number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): ListAclRulesRequestAddressTypeEnum | number | undefined {
        return this['address_type'];
    }
    public withLimit(limit: number): ListAclRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAclRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAclRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListAclRulesRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withTagsId(tagsId: string): ListAclRulesRequest {
        this['tags_id'] = tagsId;
        return this;
    }
    public set tagsId(tagsId: string  | undefined) {
        this['tags_id'] = tagsId;
    }
    public get tagsId(): string | undefined {
        return this['tags_id'];
    }
    public withSource(source: string): ListAclRulesRequest {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: string): ListAclRulesRequest {
        this['destination'] = destination;
        return this;
    }
    public withService(service: string): ListAclRulesRequest {
        this['service'] = service;
        return this;
    }
    public withApplication(application: string): ListAclRulesRequest {
        this['application'] = application;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAclRulesRequestTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ListAclRulesRequestProtocolEnum {
    NUMBER_6 = 6,
    NUMBER_17 = 17,
    NUMBER_1 = 1,
    NUMBER_58 = 58
}
/**
    * @export
    * @enum {string}
    */
export enum ListAclRulesRequestStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum ListAclRulesRequestActionTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum ListAclRulesRequestAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
