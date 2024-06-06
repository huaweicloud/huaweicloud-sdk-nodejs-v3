

export class ShowAccessPreviewRequest {
    private 'analyzer_id'?: string;
    private 'access_preview_id'?: string;
    public constructor(analyzerId?: string, accessPreviewId?: string) { 
        this['analyzer_id'] = analyzerId;
        this['access_preview_id'] = accessPreviewId;
    }
    public withAnalyzerId(analyzerId: string): ShowAccessPreviewRequest {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withAccessPreviewId(accessPreviewId: string): ShowAccessPreviewRequest {
        this['access_preview_id'] = accessPreviewId;
        return this;
    }
    public set accessPreviewId(accessPreviewId: string  | undefined) {
        this['access_preview_id'] = accessPreviewId;
    }
    public get accessPreviewId(): string | undefined {
        return this['access_preview_id'];
    }
}