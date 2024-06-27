

export class ListBlackWhiteListsRequest {
    private 'project_id'?: string;
    private 'object_id'?: string;
    private 'list_type'?: ListBlackWhiteListsRequestListTypeEnum | number;
    private 'address_type'?: number;
    public address?: string;
    public port?: string;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public constructor(projectId?: string, objectId?: string, listType?: number, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['list_type'] = listType;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListBlackWhiteListsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListBlackWhiteListsRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withListType(listType: ListBlackWhiteListsRequestListTypeEnum | number): ListBlackWhiteListsRequest {
        this['list_type'] = listType;
        return this;
    }
    public set listType(listType: ListBlackWhiteListsRequestListTypeEnum | number  | undefined) {
        this['list_type'] = listType;
    }
    public get listType(): ListBlackWhiteListsRequestListTypeEnum | number | undefined {
        return this['list_type'];
    }
    public withAddressType(addressType: number): ListBlackWhiteListsRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withAddress(address: string): ListBlackWhiteListsRequest {
        this['address'] = address;
        return this;
    }
    public withPort(port: string): ListBlackWhiteListsRequest {
        this['port'] = port;
        return this;
    }
    public withLimit(limit: number): ListBlackWhiteListsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBlackWhiteListsRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBlackWhiteListsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListBlackWhiteListsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBlackWhiteListsRequestListTypeEnum {
    NUMBER_4 = 4,
    NUMBER_5 = 5
}
