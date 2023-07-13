import { AggregatePolicyAssignmentsRequest } from './AggregatePolicyAssignmentsRequest';


export class ListAggregateComplianceByPolicyAssignmentRequest {
    public limit?: number;
    public marker?: string;
    public body?: AggregatePolicyAssignmentsRequest;
    public constructor() { 
    }
    public withLimit(limit: number): ListAggregateComplianceByPolicyAssignmentRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAggregateComplianceByPolicyAssignmentRequest {
        this['marker'] = marker;
        return this;
    }
    public withBody(body: AggregatePolicyAssignmentsRequest): ListAggregateComplianceByPolicyAssignmentRequest {
        this['body'] = body;
        return this;
    }
}