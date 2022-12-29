

export class ListServiceItemsDetailsRequest {
    private 'project_id': string | undefined;
    private 'set_id': string | undefined;
    private 'key_word'?: string | undefined;
    public limit: number;
    public offset: number;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public constructor(projectId?: any, setId?: any, limit?: any, offset?: any) { 
        this['project_id'] = projectId;
        this['set_id'] = setId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListServiceItemsDetailsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withSetId(setId: string): ListServiceItemsDetailsRequest {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string | undefined) {
        this['set_id'] = setId;
    }
    public get setId() {
        return this['set_id'];
    }
    public withKeyWord(keyWord: string): ListServiceItemsDetailsRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord() {
        return this['key_word'];
    }
    public withLimit(limit: number): ListServiceItemsDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListServiceItemsDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListServiceItemsDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListServiceItemsDetailsRequest {
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