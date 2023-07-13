

export class ShowResourceHistoryRequest {
    private 'resource_id': string | undefined;
    public marker?: string;
    public limit?: number;
    private 'earlier_time'?: number | undefined;
    private 'later_time'?: number | undefined;
    private 'chronological_order'?: ShowResourceHistoryRequestChronologicalOrderEnum | undefined;
    public constructor(resourceId?: any) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): ShowResourceHistoryRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withMarker(marker: string): ShowResourceHistoryRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ShowResourceHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withEarlierTime(earlierTime: number): ShowResourceHistoryRequest {
        this['earlier_time'] = earlierTime;
        return this;
    }
    public set earlierTime(earlierTime: number | undefined) {
        this['earlier_time'] = earlierTime;
    }
    public get earlierTime() {
        return this['earlier_time'];
    }
    public withLaterTime(laterTime: number): ShowResourceHistoryRequest {
        this['later_time'] = laterTime;
        return this;
    }
    public set laterTime(laterTime: number | undefined) {
        this['later_time'] = laterTime;
    }
    public get laterTime() {
        return this['later_time'];
    }
    public withChronologicalOrder(chronologicalOrder: ShowResourceHistoryRequestChronologicalOrderEnum): ShowResourceHistoryRequest {
        this['chronological_order'] = chronologicalOrder;
        return this;
    }
    public set chronologicalOrder(chronologicalOrder: ShowResourceHistoryRequestChronologicalOrderEnum | undefined) {
        this['chronological_order'] = chronologicalOrder;
    }
    public get chronologicalOrder() {
        return this['chronological_order'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceHistoryRequestChronologicalOrderEnum {
    FORWARD = 'Forward',
    REVERSE = 'Reverse'
}
