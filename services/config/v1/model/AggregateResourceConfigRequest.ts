import { ResourceIdentifier } from './ResourceIdentifier';


export class AggregateResourceConfigRequest {
    private 'aggregator_id': string | undefined;
    private 'resource_identifier': ResourceIdentifier | undefined;
    public constructor(aggregatorId?: any, resourceIdentifier?: any) { 
        this['aggregator_id'] = aggregatorId;
        this['resource_identifier'] = resourceIdentifier;
    }
    public withAggregatorId(aggregatorId: string): AggregateResourceConfigRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId() {
        return this['aggregator_id'];
    }
    public withResourceIdentifier(resourceIdentifier: ResourceIdentifier): AggregateResourceConfigRequest {
        this['resource_identifier'] = resourceIdentifier;
        return this;
    }
    public set resourceIdentifier(resourceIdentifier: ResourceIdentifier | undefined) {
        this['resource_identifier'] = resourceIdentifier;
    }
    public get resourceIdentifier() {
        return this['resource_identifier'];
    }
}