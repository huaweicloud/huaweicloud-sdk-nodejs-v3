

export class ListLayoutWizardsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'layout_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: ListLayoutWizardsRequestSortKeyEnum | string;
    private 'sort_dir'?: string;
    public constructor(contentType?: string, workspaceId?: string, layoutId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['layout_id'] = layoutId;
    }
    public withContentType(contentType: string): ListLayoutWizardsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListLayoutWizardsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLayoutId(layoutId: string): ListLayoutWizardsRequest {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withOffset(offset: number): ListLayoutWizardsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLayoutWizardsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: ListLayoutWizardsRequestSortKeyEnum | string): ListLayoutWizardsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListLayoutWizardsRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListLayoutWizardsRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListLayoutWizardsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLayoutWizardsRequestSortKeyEnum {
    UPDATE_TIME = 'update_time',
    CREATE_TIME = 'create_time'
}
