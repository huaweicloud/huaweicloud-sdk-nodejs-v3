

export class ListNotificationRecordsRequest {
    public limit?: string;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListNotificationRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListNotificationRecordsRequest {
        this['marker'] = marker;
        return this;
    }
}