

export class ListAddressSetListUsingGetRequest {
    private 'project_id'?: string;
    private 'object_id'?: string;
    private 'key_word'?: string;
    public limit?: number;
    public offset?: number;
    public address?: string;
    private 'address_type'?: ListAddressSetListUsingGetRequestAddressTypeEnum | number;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public constructor(projectId?: string, objectId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListAddressSetListUsingGetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListAddressSetListUsingGetRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withKeyWord(keyWord: string): ListAddressSetListUsingGetRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withLimit(limit: number): ListAddressSetListUsingGetRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAddressSetListUsingGetRequest {
        this['offset'] = offset;
        return this;
    }
    public withAddress(address: string): ListAddressSetListUsingGetRequest {
        this['address'] = address;
        return this;
    }
    public withAddressType(addressType: ListAddressSetListUsingGetRequestAddressTypeEnum | number): ListAddressSetListUsingGetRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: ListAddressSetListUsingGetRequestAddressTypeEnum | number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): ListAddressSetListUsingGetRequestAddressTypeEnum | number | undefined {
        return this['address_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAddressSetListUsingGetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListAddressSetListUsingGetRequest {
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
export enum ListAddressSetListUsingGetRequestAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
