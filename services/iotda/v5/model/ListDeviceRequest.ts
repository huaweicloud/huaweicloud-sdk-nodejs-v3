

export class ListDeviceRequest {
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListDeviceRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDeviceRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListDeviceRequest {
        this['offset'] = offset;
        return this;
    }
}