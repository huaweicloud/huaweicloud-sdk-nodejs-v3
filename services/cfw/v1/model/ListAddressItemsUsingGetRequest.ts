

export class ListAddressItemsUsingGetRequest {
    private 'project_id'?: string;
    private 'set_id'?: string;
    private 'key_word'?: string;
    public limit?: number;
    public offset?: number;
    public address?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public constructor(projectId?: string, setId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['set_id'] = setId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListAddressItemsUsingGetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSetId(setId: string): ListAddressItemsUsingGetRequest {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withKeyWord(keyWord: string): ListAddressItemsUsingGetRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withLimit(limit: number): ListAddressItemsUsingGetRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAddressItemsUsingGetRequest {
        this['offset'] = offset;
        return this;
    }
    public withAddress(address: string): ListAddressItemsUsingGetRequest {
        this['address'] = address;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAddressItemsUsingGetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListAddressItemsUsingGetRequest {
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