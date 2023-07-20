

export class UpdateCoverByThumbnailReq {
    public thumbnailUrl?: string;
    public constructor(thumbnailUrl?: string) { 
        this['thumbnailUrl'] = thumbnailUrl;
    }
    public withThumbnailUrl(thumbnailUrl: string): UpdateCoverByThumbnailReq {
        this['thumbnailUrl'] = thumbnailUrl;
        return this;
    }
}