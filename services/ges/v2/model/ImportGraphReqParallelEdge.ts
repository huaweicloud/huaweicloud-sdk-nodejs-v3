

export class ImportGraphReqParallelEdge {
    public action?: string;
    private 'ignore_label'?: boolean;
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
}