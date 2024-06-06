

export class ImportGraphReqParallelEdge {
    public action?: string;
    private 'ignore_label'?: boolean;
    private 'sort_key_column'?: string;
    public constructor() { 
    }
    public withAction(action: string): ImportGraphReqParallelEdge {
        this['action'] = action;
        return this;
    }
    public withIgnoreLabel(ignoreLabel: boolean): ImportGraphReqParallelEdge {
        this['ignore_label'] = ignoreLabel;
        return this;
    }
    public set ignoreLabel(ignoreLabel: boolean  | undefined) {
        this['ignore_label'] = ignoreLabel;
    }
    public get ignoreLabel(): boolean | undefined {
        return this['ignore_label'];
    }
    public withSortKeyColumn(sortKeyColumn: string): ImportGraphReqParallelEdge {
        this['sort_key_column'] = sortKeyColumn;
        return this;
    }
    public set sortKeyColumn(sortKeyColumn: string  | undefined) {
        this['sort_key_column'] = sortKeyColumn;
    }
    public get sortKeyColumn(): string | undefined {
        return this['sort_key_column'];
    }
}