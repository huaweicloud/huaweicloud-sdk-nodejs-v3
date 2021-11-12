

export class AddressGroup {
    public id: string;
    public name: string;
    public description: string;
    private 'ip_set': Array<string> | undefined;
    private 'ip_version': number | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    private 'tenant_id': string | undefined;
    public constructor(id?: any, name?: any, description?: any, ipSet?: any, ipVersion?: any, createdAt?: any, updatedAt?: any, tenantId?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['ip_set'] = ipSet;
        this['ip_version'] = ipVersion;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['tenant_id'] = tenantId;
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
    public withIpSet(ipSet: Array<string>): AddressGroup {
        this['ip_set'] = ipSet;
        return this;
    }
    public set ipSet(ipSet: Array<string> | undefined) {
        this['ip_set'] = ipSet;
    }
    public get ipSet() {
        return this['ip_set'];
    }
    public withIpVersion(ipVersion: number): AddressGroup {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withCreatedAt(createdAt: Date): AddressGroup {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): AddressGroup {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withTenantId(tenantId: string): AddressGroup {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
}