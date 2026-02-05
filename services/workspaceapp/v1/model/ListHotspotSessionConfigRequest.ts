

export class ListHotspotSessionConfigRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListHotspotSessionConfigRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHotspotSessionConfigRequest {
        this['limit'] = limit;
        return this;
    }
}