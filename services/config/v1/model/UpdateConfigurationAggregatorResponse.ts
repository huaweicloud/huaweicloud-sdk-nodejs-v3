import { AccountAggregationSource } from './AccountAggregationSource';
import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateConfigurationAggregatorResponse extends SdkResponse {
    private 'aggregator_name'?: string;
    private 'aggregator_id'?: string;
    private 'aggregator_urn'?: string;
    private 'aggregator_type'?: string;
    private 'account_aggregation_sources'?: AccountAggregationSource;
    private 'updated_at'?: string;
    private 'created_at'?: string;
    public tags?: Array<ResourceTag>;
    public constructor() { 
        super();
    }
    public withAggregatorName(aggregatorName: string): UpdateConfigurationAggregatorResponse {
        this['aggregator_name'] = aggregatorName;
        return this;
    }
    public set aggregatorName(aggregatorName: string  | undefined) {
        this['aggregator_name'] = aggregatorName;
    }
    public get aggregatorName(): string | undefined {
        return this['aggregator_name'];
    }
    public withAggregatorId(aggregatorId: string): UpdateConfigurationAggregatorResponse {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withAggregatorUrn(aggregatorUrn: string): UpdateConfigurationAggregatorResponse {
        this['aggregator_urn'] = aggregatorUrn;
        return this;
    }
    public set aggregatorUrn(aggregatorUrn: string  | undefined) {
        this['aggregator_urn'] = aggregatorUrn;
    }
    public get aggregatorUrn(): string | undefined {
        return this['aggregator_urn'];
    }
    public withAggregatorType(aggregatorType: string): UpdateConfigurationAggregatorResponse {
        this['aggregator_type'] = aggregatorType;
        return this;
    }
    public set aggregatorType(aggregatorType: string  | undefined) {
        this['aggregator_type'] = aggregatorType;
    }
    public get aggregatorType(): string | undefined {
        return this['aggregator_type'];
    }
    public withAccountAggregationSources(accountAggregationSources: AccountAggregationSource): UpdateConfigurationAggregatorResponse {
        this['account_aggregation_sources'] = accountAggregationSources;
        return this;
    }
    public set accountAggregationSources(accountAggregationSources: AccountAggregationSource  | undefined) {
        this['account_aggregation_sources'] = accountAggregationSources;
    }
    public get accountAggregationSources(): AccountAggregationSource | undefined {
        return this['account_aggregation_sources'];
    }
    public withUpdatedAt(updatedAt: string): UpdateConfigurationAggregatorResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withCreatedAt(createdAt: string): UpdateConfigurationAggregatorResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withTags(tags: Array<ResourceTag>): UpdateConfigurationAggregatorResponse {
        this['tags'] = tags;
        return this;
    }
}