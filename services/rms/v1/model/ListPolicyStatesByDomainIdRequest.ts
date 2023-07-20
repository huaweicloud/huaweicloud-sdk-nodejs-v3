

export class ListPolicyStatesByDomainIdRequest {
    private 'compliance_state'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withComplianceState(complianceState: string): ListPolicyStatesByDomainIdRequest {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: string  | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState(): string | undefined {
        return this['compliance_state'];
    }
    public withResourceId(resourceId: string): ListPolicyStatesByDomainIdRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListPolicyStatesByDomainIdRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withLimit(limit: number): ListPolicyStatesByDomainIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPolicyStatesByDomainIdRequest {
        this['marker'] = marker;
        return this;
    }
}