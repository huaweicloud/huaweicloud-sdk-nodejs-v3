

export class ListDomainSetsRequest {
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'object_id'?: string;
    private 'key_word'?: string;
    private 'domain_set_type'?: number;
    private 'config_status'?: number;
    public constructor(projectId?: string, fwInstanceId?: string, limit?: number, offset?: number, objectId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['limit'] = limit;
        this['offset'] = offset;
        this['object_id'] = objectId;
    }
    public withProjectId(projectId: string): ListDomainSetsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDomainSetsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListDomainSetsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withLimit(limit: number): ListDomainSetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDomainSetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withObjectId(objectId: string): ListDomainSetsRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withKeyWord(keyWord: string): ListDomainSetsRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withDomainSetType(domainSetType: number): ListDomainSetsRequest {
        this['domain_set_type'] = domainSetType;
        return this;
    }
    public set domainSetType(domainSetType: number  | undefined) {
        this['domain_set_type'] = domainSetType;
    }
    public get domainSetType(): number | undefined {
        return this['domain_set_type'];
    }
    public withConfigStatus(configStatus: number): ListDomainSetsRequest {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: number  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): number | undefined {
        return this['config_status'];
    }
}