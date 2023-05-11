

export class ShowConfigurationAggregatorSourcesStatusRequest {
    private 'aggregator_id': string | undefined;
    private 'update_status'?: ShowConfigurationAggregatorSourcesStatusRequestUpdateStatusEnum | undefined;
    public limit?: number;
    public marker?: string;
    public constructor(aggregatorId?: any) { 
        this['aggregator_id'] = aggregatorId;
    }
    public withAggregatorId(aggregatorId: string): ShowConfigurationAggregatorSourcesStatusRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId() {
        return this['aggregator_id'];
    }
    public withUpdateStatus(updateStatus: ShowConfigurationAggregatorSourcesStatusRequestUpdateStatusEnum): ShowConfigurationAggregatorSourcesStatusRequest {
        this['update_status'] = updateStatus;
        return this;
    }
    public set updateStatus(updateStatus: ShowConfigurationAggregatorSourcesStatusRequestUpdateStatusEnum | undefined) {
        this['update_status'] = updateStatus;
    }
    public get updateStatus() {
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
