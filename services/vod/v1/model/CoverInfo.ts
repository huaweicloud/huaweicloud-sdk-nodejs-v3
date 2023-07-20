

export class CoverInfo {
    private 'cover_url'?: string;
    public constructor() { 
    }
    public withCoverUrl(coverUrl: string): CoverInfo {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
}