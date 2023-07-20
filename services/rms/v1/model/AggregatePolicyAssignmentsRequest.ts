import { AggregatePolicyAssignmentsFilters } from './AggregatePolicyAssignmentsFilters';


export class AggregatePolicyAssignmentsRequest {
    private 'aggregator_id'?: string;
    public filter?: AggregatePolicyAssignmentsFilters;
    public constructor(aggregatorId?: string) { 
        this['aggregator_id'] = aggregatorId;
    }
    public withAggregatorId(aggregatorId: string): AggregatePolicyAssignmentsRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withFilter(filter: AggregatePolicyAssignmentsFilters): AggregatePolicyAssignmentsRequest {
        this['filter'] = filter;
        return this;
    }
}