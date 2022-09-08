

export class CinderListVolumeTransfersRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): CinderListVolumeTransfersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): CinderListVolumeTransfersRequest {
        this['offset'] = offset;
        return this;
    }
}