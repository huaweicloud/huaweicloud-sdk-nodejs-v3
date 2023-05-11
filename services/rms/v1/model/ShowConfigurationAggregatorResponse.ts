import { AccountAggregationSource } from './AccountAggregationSource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationAggregatorResponse extends SdkResponse {
    private 'aggregator_name'?: string | undefined;
    private 'aggregator_id'?: string | undefined;
    private 'aggregator_urn'?: string | undefined;
    private 'aggregator_type'?: string | undefined;
    private 'account_aggregation_sources'?: AccountAggregationSource | undefined;
    private 'updated_at'?: string | undefined;
    private 'created_at'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAggregatorName(aggregatorName: string): ShowConfigurationAggregatorResponse {
        this['aggregator_name'] = aggregatorName;
        return this;
    }
    public set aggregatorName(aggregatorName: string | undefined) {
        this['aggregator_name'] = aggregatorName;
    }
    public get aggregatorName() {
        return this['aggregator_name'];
    }
    public withAggregatorId(aggregatorId: string): ShowConfigurationAggregatorResponse {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId() {
        return this['aggregator_id'];
    }
    public withAggregatorUrn(aggregatorUrn: string): ShowConfigurationAggregatorResponse {
        this['aggregator_urn'] = aggregatorUrn;
        return this;
    }
    public set aggregatorUrn(aggregatorUrn: string | undefined) {
        this['aggregator_urn'] = aggregatorUrn;
    }
    public get aggregatorUrn() {
        return this['aggregator_urn'];
    }
    public withAggregatorType(aggregatorType: string): ShowConfigurationAggregatorResponse {
        this['aggregator_type'] = aggregatorType;
        return this;
    }
    public set aggregatorType(aggregatorType: string | undefined) {
        this['aggregator_type'] = aggregatorType;
    }
    public get aggregatorType() {
        return this['aggregator_type'];
    }
    public withAccountAggregationSources(accountAggregationSources: AccountAggregationSource): ShowConfigurationAggregatorResponse {
        this['account_aggregation_sources'] = accountAggregationSources;
        return this;
    }
    public set accountAggregationSources(accountAggregationSources: AccountAggregationSource | undefined) {
        this['account_aggregation_sources'] = accountAggregationSources;
    }
    public get accountAggregationSources() {
        return this['account_aggregation_sources'];
    }
    public withUpdatedAt(updatedAt: string): ShowConfigurationAggregatorResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withCreatedAt(createdAt: string): ShowConfigurationAggregatorResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
}