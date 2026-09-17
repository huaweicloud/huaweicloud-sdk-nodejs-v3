

export class ResourceDetail {
    private 'resource_id'?: string;
    public status?: string;
    private 'charging_rule'?: string;
    public type?: string;
    private 'resource_name'?: string;
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'associated_edge_cluster_id'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResourceDetail {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withStatus(status: string): ResourceDetail {
        this['status'] = status;
        return this;
    }
    public withChargingRule(chargingRule: string): ResourceDetail {
        this['charging_rule'] = chargingRule;
        return this;
    }
    public set chargingRule(chargingRule: string  | undefined) {
        this['charging_rule'] = chargingRule;
    }
    public get chargingRule(): string | undefined {
        return this['charging_rule'];
    }
    public withType(type: string): ResourceDetail {
        this['type'] = type;
        return this;
    }
    public withResourceName(resourceName: string): ResourceDetail {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withCloudServiceType(cloudServiceType: string): ResourceDetail {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): ResourceDetail {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ResourceDetail {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withAssociatedEdgeClusterId(associatedEdgeClusterId: string): ResourceDetail {
        this['associated_edge_cluster_id'] = associatedEdgeClusterId;
        return this;
    }
    public set associatedEdgeClusterId(associatedEdgeClusterId: string  | undefined) {
        this['associated_edge_cluster_id'] = associatedEdgeClusterId;
    }
    public get associatedEdgeClusterId(): string | undefined {
        return this['associated_edge_cluster_id'];
    }
}