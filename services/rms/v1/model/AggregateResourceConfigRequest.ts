import { ResourceIdentifier } from './ResourceIdentifier';


export class AggregateResourceConfigRequest {
    private 'aggregator_id'?: string;
    private 'resource_identifier'?: ResourceIdentifier;
    public constructor(aggregatorId?: string, resourceIdentifier?: ResourceIdentifier) { 
        this['aggregator_id'] = aggregatorId;
        this['resource_identifier'] = resourceIdentifier;
    }
    public withAggregatorId(aggregatorId: string): AggregateResourceConfigRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withResourceIdentifier(resourceIdentifier: ResourceIdentifier): AggregateResourceConfigRequest {
        this['resource_identifier'] = resourceIdentifier;
        return this;
    }
    public set resourceIdentifier(resourceIdentifier: ResourceIdentifier  | undefined) {
        this['resource_identifier'] = resourceIdentifier;
    }
    public get resourceIdentifier(): ResourceIdentifier | undefined {
        return this['resource_identifier'];
    }
}