

export class ListCloudPhoneServerModelOfferingsRequest {
    public marker?: string;
    public limit?: number;
    public constructor() { 
    }
    public withMarker(marker: string): ListCloudPhoneServerModelOfferingsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListCloudPhoneServerModelOfferingsRequest {
        this['limit'] = limit;
        return this;
    }
}