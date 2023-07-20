

export class ShowResourceHistoryRequest {
    private 'resource_id'?: string;
    public marker?: string;
    public limit?: number;
    private 'earlier_time'?: number;
    private 'later_time'?: number;
    private 'chronological_order'?: ShowResourceHistoryRequestChronologicalOrderEnum | string;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): ShowResourceHistoryRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
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
    public set earlierTime(earlierTime: number  | undefined) {
        this['earlier_time'] = earlierTime;
    }
    public get earlierTime(): number | undefined {
        return this['earlier_time'];
    }
    public withLaterTime(laterTime: number): ShowResourceHistoryRequest {
        this['later_time'] = laterTime;
        return this;
    }
    public set laterTime(laterTime: number  | undefined) {
        this['later_time'] = laterTime;
    }
    public get laterTime(): number | undefined {
        return this['later_time'];
    }
    public withChronologicalOrder(chronologicalOrder: ShowResourceHistoryRequestChronologicalOrderEnum | string): ShowResourceHistoryRequest {
        this['chronological_order'] = chronologicalOrder;
        return this;
    }
    public set chronologicalOrder(chronologicalOrder: ShowResourceHistoryRequestChronologicalOrderEnum | string  | undefined) {
        this['chronological_order'] = chronologicalOrder;
    }
    public get chronologicalOrder(): ShowResourceHistoryRequestChronologicalOrderEnum | string | undefined {
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
