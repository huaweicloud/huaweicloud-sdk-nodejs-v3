

export class CreateAddressGroupOption {
    public name: string;
    public description?: string;
    private 'ip_version': number | undefined;
    private 'ip_set'?: Array<string> | undefined;
    private 'max_capacity'?: number | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(name?: any, ipVersion?: any) { 
        this['name'] = name;
        this['ip_version'] = ipVersion;
    }
    public withName(name: string): CreateAddressGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAddressGroupOption {
        this['description'] = description;
        return this;
    }
    public withIpVersion(ipVersion: number): CreateAddressGroupOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withIpSet(ipSet: Array<string>): CreateAddressGroupOption {
        this['ip_set'] = ipSet;
        return this;
    }
    public set ipSet(ipSet: Array<string> | undefined) {
        this['ip_set'] = ipSet;
    }
    public get ipSet() {
        return this['ip_set'];
    }
    public withMaxCapacity(maxCapacity: number): CreateAddressGroupOption {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity() {
        return this['max_capacity'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAddressGroupOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}