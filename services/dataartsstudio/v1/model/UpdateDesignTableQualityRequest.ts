import { UpdateDesignTableQualityParam } from './UpdateDesignTableQualityParam';


export class UpdateDesignTableQualityRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'table_id'?: string;
    public body?: UpdateDesignTableQualityParam;
    public constructor(workspace?: string, tableId?: string) { 
        this['workspace'] = workspace;
        this['table_id'] = tableId;
    }
    public withWorkspace(workspace: string): UpdateDesignTableQualityRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): UpdateDesignTableQualityRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): UpdateDesignTableQualityRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withTableId(tableId: string): UpdateDesignTableQualityRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withBody(body: UpdateDesignTableQualityParam): UpdateDesignTableQualityRequest {
        this['body'] = body;
        return this;
    }
}