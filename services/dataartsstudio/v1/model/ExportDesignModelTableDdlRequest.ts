

export class ExportDesignModelTableDdlRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'model_id'?: string;
    private 'tb_names'?: Array<string>;
    private 'with_db'?: boolean;
    public constructor(workspace?: string, modelId?: string) { 
        this['workspace'] = workspace;
        this['model_id'] = modelId;
    }
    public withWorkspace(workspace: string): ExportDesignModelTableDdlRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ExportDesignModelTableDdlRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ExportDesignModelTableDdlRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withModelId(modelId: string): ExportDesignModelTableDdlRequest {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withTbNames(tbNames: Array<string>): ExportDesignModelTableDdlRequest {
        this['tb_names'] = tbNames;
        return this;
    }
    public set tbNames(tbNames: Array<string>  | undefined) {
        this['tb_names'] = tbNames;
    }
    public get tbNames(): Array<string> | undefined {
        return this['tb_names'];
    }
    public withWithDb(withDb: boolean): ExportDesignModelTableDdlRequest {
        this['with_db'] = withDb;
        return this;
    }
    public set withDb(withDb: boolean  | undefined) {
        this['with_db'] = withDb;
    }
    public get withDb(): boolean | undefined {
        return this['with_db'];
    }
}