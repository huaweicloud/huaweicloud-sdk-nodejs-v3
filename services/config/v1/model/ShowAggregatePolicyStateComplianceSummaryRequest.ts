import { AggregatePolicyStatesRequest } from './AggregatePolicyStatesRequest';


export class ShowAggregatePolicyStateComplianceSummaryRequest {
    public body?: AggregatePolicyStatesRequest;
    public constructor() { 
    }
    public withBody(body: AggregatePolicyStatesRequest): ShowAggregatePolicyStateComplianceSummaryRequest {
        this['body'] = body;
        return this;
    }
}