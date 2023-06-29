import { AggregateComplianceDetailRequest } from './AggregateComplianceDetailRequest';


export class ShowAggregateComplianceDetailsByPolicyAssignmentRequest {
    public limit?: number;
    public marker?: string;
    public body?: AggregateComplianceDetailRequest;
    public constructor() { 
    }
    public withLimit(limit: number): ShowAggregateComplianceDetailsByPolicyAssignmentRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowAggregateComplianceDetailsByPolicyAssignmentRequest {
        this['marker'] = marker;
        return this;
    }
    public withBody(body: AggregateComplianceDetailRequest): ShowAggregateComplianceDetailsByPolicyAssignmentRequest {
        this['body'] = body;
        return this;
    }
}