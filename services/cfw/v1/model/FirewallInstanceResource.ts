

export class FirewallInstanceResource {
    private 'resource_id'?: string | undefined;
    private 'cloud_service_type'?: string | undefined;
    private 'resource_type'?: string | undefined;
    private 'resource_spec_code'?: string | undefined;
    private 'resource_size'?: number | undefined;
    private 'resource_size_measure_id'?: number | undefined;
    public constructor() { 
    }
    public withResourceId(resourceId: string): FirewallInstanceResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withCloudServiceType(cloudServiceType: string): FirewallInstanceResource {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType() {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): FirewallInstanceResource {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): FirewallInstanceResource {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode() {
        return this['resource_spec_code'];
    }
    public withResourceSize(resourceSize: number): FirewallInstanceResource {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize() {
        return this['resource_size'];
    }
    public withResourceSizeMeasureId(resourceSizeMeasureId: number): FirewallInstanceResource {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
        return this;
    }
    public set resourceSizeMeasureId(resourceSizeMeasureId: number | undefined) {
        this['resource_size_measure_id'] = resourceSizeMeasureId;
    }
    public get resourceSizeMeasureId() {
        return this['resource_size_measure_id'];
    }
}