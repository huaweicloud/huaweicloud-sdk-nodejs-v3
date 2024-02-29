

export class ListAddressSetsRequest {
    private 'project_id'?: string;
    private 'object_id'?: string;
    private 'key_word'?: string;
    public limit?: number;
    public offset?: number;
    public address?: string;
    private 'address_type'?: ListAddressSetsRequestAddressTypeEnum | number;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'query_address_set_type'?: number;
    public constructor(projectId?: string, objectId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListAddressSetsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListAddressSetsRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withKeyWord(keyWord: string): ListAddressSetsRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withLimit(limit: number): ListAddressSetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAddressSetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withAddress(address: string): ListAddressSetsRequest {
        this['address'] = address;
        return this;
    }
    public withAddressType(addressType: ListAddressSetsRequestAddressTypeEnum | number): ListAddressSetsRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: ListAddressSetsRequestAddressTypeEnum | number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): ListAddressSetsRequestAddressTypeEnum | number | undefined {
        return this['address_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAddressSetsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListAddressSetsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withQueryAddressSetType(queryAddressSetType: number): ListAddressSetsRequest {
        this['query_address_set_type'] = queryAddressSetType;
        return this;
    }
    public set queryAddressSetType(queryAddressSetType: number  | undefined) {
        this['query_address_set_type'] = queryAddressSetType;
    }
    public get queryAddressSetType(): number | undefined {
        return this['query_address_set_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAddressSetsRequestAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
