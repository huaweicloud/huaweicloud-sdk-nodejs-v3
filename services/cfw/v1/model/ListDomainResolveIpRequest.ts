

export class ListDomainResolveIpRequest {
    private 'address_type'?: string;
    private 'domain_address_id'?: string;
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public constructor(domainAddressId?: string, projectId?: string, fwInstanceId?: string) { 
        this['domain_address_id'] = domainAddressId;
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
    }
    public withAddressType(addressType: string): ListDomainResolveIpRequest {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: string  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): string | undefined {
        return this['address_type'];
    }
    public withDomainAddressId(domainAddressId: string): ListDomainResolveIpRequest {
        this['domain_address_id'] = domainAddressId;
        return this;
    }
    public set domainAddressId(domainAddressId: string  | undefined) {
        this['domain_address_id'] = domainAddressId;
    }
    public get domainAddressId(): string | undefined {
        return this['domain_address_id'];
    }
    public withProjectId(projectId: string): ListDomainResolveIpRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListDomainResolveIpRequest {
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