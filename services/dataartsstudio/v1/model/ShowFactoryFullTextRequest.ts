

export class ShowFactoryFullTextRequest {
    public workspace?: string;
    private 'workspace_id'?: string;
    private 'search_text'?: string;
    private 'job_type'?: string;
    private 'script_type'?: string;
    private 'node_type'?: string;
    private 'new_save_or_commit'?: string;
    public owners?: string;
    private 'doc_types'?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    public limit?: number;
    public offset?: number;
    private 'if_query_parameters'?: string;
    private 'match_type'?: number;
    private 'schedule_state'?: string;
    private 'is_exact'?: string;
    private 'exact_field'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowFactoryFullTextRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ShowFactoryFullTextRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSearchText(searchText: string): ShowFactoryFullTextRequest {
        this['search_text'] = searchText;
        return this;
    }
    public set searchText(searchText: string  | undefined) {
        this['search_text'] = searchText;
    }
    public get searchText(): string | undefined {
        return this['search_text'];
    }
    public withJobType(jobType: string): ShowFactoryFullTextRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withScriptType(scriptType: string): ShowFactoryFullTextRequest {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: string  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): string | undefined {
        return this['script_type'];
    }
    public withNodeType(nodeType: string): ShowFactoryFullTextRequest {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withNewSaveOrCommit(newSaveOrCommit: string): ShowFactoryFullTextRequest {
        this['new_save_or_commit'] = newSaveOrCommit;
        return this;
    }
    public set newSaveOrCommit(newSaveOrCommit: string  | undefined) {
        this['new_save_or_commit'] = newSaveOrCommit;
    }
    public get newSaveOrCommit(): string | undefined {
        return this['new_save_or_commit'];
    }
    public withOwners(owners: string): ShowFactoryFullTextRequest {
        this['owners'] = owners;
        return this;
    }
    public withDocTypes(docTypes: string): ShowFactoryFullTextRequest {
        this['doc_types'] = docTypes;
        return this;
    }
    public set docTypes(docTypes: string  | undefined) {
        this['doc_types'] = docTypes;
    }
    public get docTypes(): string | undefined {
        return this['doc_types'];
    }
    public withBeginTime(beginTime: number): ShowFactoryFullTextRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ShowFactoryFullTextRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ShowFactoryFullTextRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowFactoryFullTextRequest {
        this['offset'] = offset;
        return this;
    }
    public withIfQueryParameters(ifQueryParameters: string): ShowFactoryFullTextRequest {
        this['if_query_parameters'] = ifQueryParameters;
        return this;
    }
    public set ifQueryParameters(ifQueryParameters: string  | undefined) {
        this['if_query_parameters'] = ifQueryParameters;
    }
    public get ifQueryParameters(): string | undefined {
        return this['if_query_parameters'];
    }
    public withMatchType(matchType: number): ShowFactoryFullTextRequest {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: number  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): number | undefined {
        return this['match_type'];
    }
    public withScheduleState(scheduleState: string): ShowFactoryFullTextRequest {
        this['schedule_state'] = scheduleState;
        return this;
    }
    public set scheduleState(scheduleState: string  | undefined) {
        this['schedule_state'] = scheduleState;
    }
    public get scheduleState(): string | undefined {
        return this['schedule_state'];
    }
    public withIsExact(isExact: string): ShowFactoryFullTextRequest {
        this['is_exact'] = isExact;
        return this;
    }
    public set isExact(isExact: string  | undefined) {
        this['is_exact'] = isExact;
    }
    public get isExact(): string | undefined {
        return this['is_exact'];
    }
    public withExactField(exactField: string): ShowFactoryFullTextRequest {
        this['exact_field'] = exactField;
        return this;
    }
    public set exactField(exactField: string  | undefined) {
        this['exact_field'] = exactField;
    }
    public get exactField(): string | undefined {
        return this['exact_field'];
    }
}