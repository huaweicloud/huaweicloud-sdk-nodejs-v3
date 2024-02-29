

export class ListAddressSetDetailRequest {
    private 'project_id'?: string;
    private 'set_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'query_address_set_type'?: number;
    public constructor(projectId?: string, setId?: string) { 
        this['project_id'] = projectId;
        this['set_id'] = setId;
    }
    public withProjectId(projectId: string): ListAddressSetDetailRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSetId(setId: string): ListAddressSetDetailRequest {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAddressSetDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListAddressSetDetailRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withQueryAddressSetType(queryAddressSetType: number): ListAddressSetDetailRequest {
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