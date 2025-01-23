

export class FeatureConfig {
    public id?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public service?: string;
    private 'tenant_id'?: string;
    public feature?: string;
    private 'switch'?: boolean;
    public type?: string;
    public value?: string;
    public description?: string;
    public caller?: string;
    public constructor(id?: string, createdAt?: string, updatedAt?: string, service?: string, tenantId?: string, feature?: string, _switch?: boolean, type?: string, value?: string, description?: string, caller?: string) { 
        this['id'] = id;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['service'] = service;
        this['tenant_id'] = tenantId;
        this['feature'] = feature;
        this['switch'] = _switch;
        this['type'] = type;
        this['value'] = value;
        this['description'] = description;
        this['caller'] = caller;
    }
    public withId(id: string): FeatureConfig {
        this['id'] = id;
        return this;
    }
    public withCreatedAt(createdAt: string): FeatureConfig {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): FeatureConfig {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withService(service: string): FeatureConfig {
        this['service'] = service;
        return this;
    }
    public withTenantId(tenantId: string): FeatureConfig {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withFeature(feature: string): FeatureConfig {
        this['feature'] = feature;
        return this;
    }
    public withSwitch(_switch: boolean): FeatureConfig {
        this['switch'] = _switch;
        return this;
    }
    public set _switch(_switch: boolean  | undefined) {
        this['switch'] = _switch;
    }
    public get _switch(): boolean | undefined {
        return this['switch'];
    }
    public withType(type: string): FeatureConfig {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): FeatureConfig {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): FeatureConfig {
        this['description'] = description;
        return this;
    }
    public withCaller(caller: string): FeatureConfig {
        this['caller'] = caller;
        return this;
    }
}