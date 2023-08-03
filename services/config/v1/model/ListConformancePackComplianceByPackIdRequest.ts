

export class ListConformancePackComplianceByPackIdRequest {
    private 'conformance_pack_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'policy_assignment_name'?: string;
    public constructor(conformancePackId?: string) { 
        this['conformance_pack_id'] = conformancePackId;
    }
    public withConformancePackId(conformancePackId: string): ListConformancePackComplianceByPackIdRequest {
        this['conformance_pack_id'] = conformancePackId;
        return this;
    }
    public set conformancePackId(conformancePackId: string  | undefined) {
        this['conformance_pack_id'] = conformancePackId;
    }
    public get conformancePackId(): string | undefined {
        return this['conformance_pack_id'];
    }
    public withLimit(limit: number): ListConformancePackComplianceByPackIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListConformancePackComplianceByPackIdRequest {
        this['marker'] = marker;
        return this;
    }
    public withPolicyAssignmentName(policyAssignmentName: string): ListConformancePackComplianceByPackIdRequest {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string  | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName(): string | undefined {
        return this['policy_assignment_name'];
    }
}