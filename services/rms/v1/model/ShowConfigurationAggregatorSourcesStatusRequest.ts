

export class ShowConfigurationAggregatorSourcesStatusRequest {
    private 'aggregator_id'?: string;
    private 'update_status'?: ShowConfigurationAggregatorSourcesStatusRequestUpdateStatusEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(aggregatorId?: string) { 
        this['aggregator_id'] = aggregatorId;
    }
    public withAggregatorId(aggregatorId: string): ShowConfigurationAggregatorSourcesStatusRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withUpdateStatus(updateStatus: ShowConfigurationAggregatorSourcesStatusRequestUpdateStatusEnum | string): ShowConfigurationAggregatorSourcesStatusRequest {
        this['update_status'] = updateStatus;
        return this;
    }
    public set updateStatus(updateStatus: ShowConfigurationAggregatorSourcesStatusRequestUpdateStatusEnum | string  | undefined) {
        this['update_status'] = updateStatus;
    }
    public get updateStatus(): ShowConfigurationAggregatorSourcesStatusRequestUpdateStatusEnum | string | undefined {
        return this['update_status'];
    }
    public withLimit(limit: number): ShowConfigurationAggregatorSourcesStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowConfigurationAggregatorSourcesStatusRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowConfigurationAggregatorSourcesStatusRequestUpdateStatusEnum {
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    OUTDATED = 'OUTDATED'
}
