

export class ListBlackWhiteListsUsingGetRequest {
    private 'project_id': string | undefined;
    private 'object_id': string | undefined;
    private 'list_type': ListBlackWhiteListsUsingGetRequestListTypeEnum | undefined;
    private 'address_type'?: ListBlackWhiteListsUsingGetRequestAddressTypeEnum | undefined;
    public address?: string;
    public port?: string;
    public limit: number;
    public offset: number;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public constructor(projectId?: any, objectId?: any, listType?: any, limit?: any, offset?: any) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['list_type'] = listType;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListBlackWhiteListsUsingGetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListBlackWhiteListsUsingGetRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withListType(listType: ListBlackWhiteListsUsingGetRequestListTypeEnum): ListBlackWhiteListsUsingGetRequest {
        this['list_type'] = listType;
        return this;
    }
    public set listType(listType: ListBlackWhiteListsUsingGetRequestListTypeEnum | undefined) {
        this['list_type'] = listType;
    }
    public get listType() {
        return this['list_type'];
    }
    public withAddressType(addressType: ListBlackWhiteListsUsingGetRequestAddressTypeEnum): ListBlackWhiteListsUsingGetRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: ListBlackWhiteListsUsingGetRequestAddressTypeEnum | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
        return this['address_type'];
    }
    public withAddress(address: string): ListBlackWhiteListsUsingGetRequest {
        this['address'] = address;
        return this;
    }
    public withPort(port: string): ListBlackWhiteListsUsingGetRequest {
        this['port'] = port;
        return this;
    }
    public withLimit(limit: number): ListBlackWhiteListsUsingGetRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBlackWhiteListsUsingGetRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBlackWhiteListsUsingGetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListBlackWhiteListsUsingGetRequest {
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
export enum ListBlackWhiteListsUsingGetRequestListTypeEnum {
    NUMBER_4 = 4,
    NUMBER_5 = 5
}
/**
    * @export
    * @enum {string}
    */
export enum ListBlackWhiteListsUsingGetRequestAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
