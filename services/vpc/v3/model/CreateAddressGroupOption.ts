import { IpExtraSetOption } from './IpExtraSetOption';


export class CreateAddressGroupOption {
    public name?: string;
    public description?: string;
    private 'ip_version'?: number;
    private 'ip_set'?: Array<string>;
    private 'max_capacity'?: number;
    private 'enterprise_project_id'?: string;
    private 'ip_extra_set'?: Array<IpExtraSetOption>;
    public constructor(name?: string, ipVersion?: number) { 
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
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withIpSet(ipSet: Array<string>): CreateAddressGroupOption {
        this['ip_set'] = ipSet;
        return this;
    }
    public set ipSet(ipSet: Array<string>  | undefined) {
        this['ip_set'] = ipSet;
    }
    public get ipSet(): Array<string> | undefined {
        return this['ip_set'];
    }
    public withMaxCapacity(maxCapacity: number): CreateAddressGroupOption {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number  | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity(): number | undefined {
        return this['max_capacity'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAddressGroupOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIpExtraSet(ipExtraSet: Array<IpExtraSetOption>): CreateAddressGroupOption {
        this['ip_extra_set'] = ipExtraSet;
        return this;
    }
    public set ipExtraSet(ipExtraSet: Array<IpExtraSetOption>  | undefined) {
        this['ip_extra_set'] = ipExtraSet;
    }
    public get ipExtraSet(): Array<IpExtraSetOption> | undefined {
        return this['ip_extra_set'];
    }
}