import { IpExtraSetRespOption } from './IpExtraSetRespOption';
import { ResourceTag } from './ResourceTag';


export class AddressGroup {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'max_capacity'?: number;
    private 'ip_set'?: Array<string>;
    private 'ip_version'?: number;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'tenant_id'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<ResourceTag>;
    public status?: string;
    private 'status_message'?: string;
    private 'ip_extra_set'?: Array<IpExtraSetRespOption>;
    public constructor(id?: string, name?: string, description?: string, maxCapacity?: number, ipSet?: Array<string>, ipVersion?: number, createdAt?: Date, updatedAt?: Date, tenantId?: string, enterpriseProjectId?: string, tags?: Array<ResourceTag>, status?: string, statusMessage?: string, ipExtraSet?: Array<IpExtraSetRespOption>) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['max_capacity'] = maxCapacity;
        this['ip_set'] = ipSet;
        this['ip_version'] = ipVersion;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['tenant_id'] = tenantId;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['tags'] = tags;
        this['status'] = status;
        this['status_message'] = statusMessage;
        this['ip_extra_set'] = ipExtraSet;
    }
    public withId(id: string): AddressGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AddressGroup {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddressGroup {
        this['description'] = description;
        return this;
    }
    public withMaxCapacity(maxCapacity: number): AddressGroup {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number  | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity(): number | undefined {
        return this['max_capacity'];
    }
    public withIpSet(ipSet: Array<string>): AddressGroup {
        this['ip_set'] = ipSet;
        return this;
    }
    public set ipSet(ipSet: Array<string>  | undefined) {
        this['ip_set'] = ipSet;
    }
    public get ipSet(): Array<string> | undefined {
        return this['ip_set'];
    }
    public withIpVersion(ipVersion: number): AddressGroup {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withCreatedAt(createdAt: Date): AddressGroup {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): AddressGroup {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTenantId(tenantId: string): AddressGroup {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddressGroup {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): AddressGroup {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: string): AddressGroup {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): AddressGroup {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withIpExtraSet(ipExtraSet: Array<IpExtraSetRespOption>): AddressGroup {
        this['ip_extra_set'] = ipExtraSet;
        return this;
    }
    public set ipExtraSet(ipExtraSet: Array<IpExtraSetRespOption>  | undefined) {
        this['ip_extra_set'] = ipExtraSet;
    }
    public get ipExtraSet(): Array<IpExtraSetRespOption> | undefined {
        return this['ip_extra_set'];
    }
}