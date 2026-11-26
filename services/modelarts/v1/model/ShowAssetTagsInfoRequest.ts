

export class ShowAssetTagsInfoRequest {
    private 'tag_category'?: string;
    private 'X-Language'?: string;
    private 'workspace_id'?: string;
    public constructor(tagCategory?: string) { 
        this['tag_category'] = tagCategory;
    }
    public withTagCategory(tagCategory: string): ShowAssetTagsInfoRequest {
        this['tag_category'] = tagCategory;
        return this;
    }
    public set tagCategory(tagCategory: string  | undefined) {
        this['tag_category'] = tagCategory;
    }
    public get tagCategory(): string | undefined {
        return this['tag_category'];
    }
    public withXLanguage(xLanguage: string): ShowAssetTagsInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withWorkspaceId(workspaceId: string): ShowAssetTagsInfoRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}