

export class DeleteAnalysisScriptRequest {
    private 'workspace_id'?: string;
    private 'analysis_script_id'?: string;
    public constructor(workspaceId?: string, analysisScriptId?: string) { 
        this['workspace_id'] = workspaceId;
        this['analysis_script_id'] = analysisScriptId;
    }
    public withWorkspaceId(workspaceId: string): DeleteAnalysisScriptRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAnalysisScriptId(analysisScriptId: string): DeleteAnalysisScriptRequest {
        this['analysis_script_id'] = analysisScriptId;
        return this;
    }
    public set analysisScriptId(analysisScriptId: string  | undefined) {
        this['analysis_script_id'] = analysisScriptId;
    }
    public get analysisScriptId(): string | undefined {
        return this['analysis_script_id'];
    }
}