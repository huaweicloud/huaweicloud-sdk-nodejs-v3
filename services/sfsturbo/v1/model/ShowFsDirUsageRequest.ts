

export class ShowFsDirUsageRequest {
    private 'share_id'?: string;
    public path?: string;
    public constructor(shareId?: string, path?: string) { 
        this['share_id'] = shareId;
        this['path'] = path;
    }
    public withShareId(shareId: string): ShowFsDirUsageRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withPath(path: string): ShowFsDirUsageRequest {
        this['path'] = path;
        return this;
    }
}