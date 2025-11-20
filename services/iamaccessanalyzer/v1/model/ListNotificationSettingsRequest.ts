

export class ListNotificationSettingsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListNotificationSettingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListNotificationSettingsRequest {
        this['marker'] = marker;
        return this;
    }
}