

export class ListAddressItemsUsingGetRequest {
    private 'project_id': string | undefined;
    private 'set_id': string | undefined;
    private 'key_word'?: string | undefined;
    public limit: number;
    public offset: number;
    public address?: string;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public constructor(projectId?: any, setId?: any, limit?: any, offset?: any) { 
        this['project_id'] = projectId;
        this['set_id'] = setId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListAddressItemsUsingGetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withSetId(setId: string): ListAddressItemsUsingGetRequest {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string | undefined) {
        this['set_id'] = setId;
    }
    public get setId() {
        return this['set_id'];
    }
    public withKeyWord(keyWord: string): ListAddressItemsUsingGetRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord() {
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
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListAddressItemsUsingGetRequest {
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