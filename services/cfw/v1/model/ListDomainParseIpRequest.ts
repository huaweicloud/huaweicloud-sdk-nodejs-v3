

export class ListDomainParseIpRequest {
    private 'address_type'?: number;
    private 'domain_address_id'?: string;
    private 'domain_set_id'?: string;
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(domainAddressId?: string, domainSetId?: string, projectId?: string, fwInstanceId?: string) { 
        this['domain_address_id'] = domainAddressId;
        this['domain_set_id'] = domainSetId;
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
    }
    public withAddressType(addressType: number): ListDomainParseIpRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withDomainAddressId(domainAddressId: string): ListDomainParseIpRequest {
        this['domain_address_id'] = domainAddressId;
        return this;
    }
    public set domainAddressId(domainAddressId: string  | undefined) {
        this['domain_address_id'] = domainAddressId;
    }
    public get domainAddressId(): string | undefined {
        return this['domain_address_id'];
    }
    public withDomainSetId(domainSetId: string): ListDomainParseIpRequest {
        this['domain_set_id'] = domainSetId;
        return this;
    }
    public set domainSetId(domainSetId: string  | undefined) {
        this['domain_set_id'] = domainSetId;
    }
    public get domainSetId(): string | undefined {
        return this['domain_set_id'];
    }
    public withProjectId(projectId: string): ListDomainParseIpRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListDomainParseIpRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDomainParseIpRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}