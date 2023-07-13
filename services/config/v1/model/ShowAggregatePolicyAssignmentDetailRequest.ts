import { AggregatePolicyAssignmentDetailRequest } from './AggregatePolicyAssignmentDetailRequest';


export class ShowAggregatePolicyAssignmentDetailRequest {
    public body?: AggregatePolicyAssignmentDetailRequest;
    public constructor() { 
    }
    public withBody(body: AggregatePolicyAssignmentDetailRequest): ShowAggregatePolicyAssignmentDetailRequest {
        this['body'] = body;
        return this;
    }
}