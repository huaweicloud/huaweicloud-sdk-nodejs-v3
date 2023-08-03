

export class ListConformancePackComplianceDetailsByPackIdRequest {
    private 'conformance_pack_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'policy_assignment_name'?: string;
    public constructor(conformancePackId?: string) { 
        this['conformance_pack_id'] = conformancePackId;
    }
    public withConformancePackId(conformancePackId: string): ListConformancePackComplianceDetailsByPackIdRequest {
        this['conformance_pack_id'] = conformancePackId;
        return this;
    }
    public set conformancePackId(conformancePackId: string  | undefined) {
        this['conformance_pack_id'] = conformancePackId;
    }
    public get conformancePackId(): string | undefined {
        return this['conformance_pack_id'];
    }
    public withLimit(limit: number): ListConformancePackComplianceDetailsByPackIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListConformancePackComplianceDetailsByPackIdRequest {
        this['marker'] = marker;
        return this;
    }
    public withPolicyAssignmentName(policyAssignmentName: string): ListConformancePackComplianceDetailsByPackIdRequest {
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