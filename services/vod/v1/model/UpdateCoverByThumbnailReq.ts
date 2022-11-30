

export class UpdateCoverByThumbnailReq {
    public thumbnailUrl: string;
    public constructor(thumbnailUrl?: any) { 
        this['thumbnailUrl'] = thumbnailUrl;
    }
    public withThumbnailUrl(thumbnailUrl: string): UpdateCoverByThumbnailReq {
        this['thumbnailUrl'] = thumbnailUrl;
        return this;
    }
}