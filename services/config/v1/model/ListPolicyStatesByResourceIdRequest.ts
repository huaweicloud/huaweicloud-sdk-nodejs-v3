

export class ListPolicyStatesByResourceIdRequest {
    private 'resource_id'?: string;
    private 'compliance_state'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): ListPolicyStatesByResourceIdRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withComplianceState(complianceState: string): ListPolicyStatesByResourceIdRequest {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: string  | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState(): string | undefined {
        return this['compliance_state'];
    }
    public withLimit(limit: number): ListPolicyStatesByResourceIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPolicyStatesByResourceIdRequest {
        this['marker'] = marker;
        return this;
    }
}