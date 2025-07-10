

export class RepoHook {
    private 'build_events'?: boolean;
    private 'created_at'?: Date;
    private 'enable_ssl_verification'?: boolean;
    public id?: number;
    private 'issues_events'?: boolean;
    private 'merge_requests_events'?: boolean;
    private 'note_events'?: boolean;
    private 'pipeline_events'?: boolean;
    private 'project_id'?: number;
    private 'push_events'?: boolean;
    private 'repository_update_events'?: boolean;
    private 'tag_push_events'?: boolean;
    private 'wiki_page_events'?: boolean;
    public constructor() { 
    }
    public withBuildEvents(buildEvents: boolean): RepoHook {
        this['build_events'] = buildEvents;
        return this;
    }
    public set buildEvents(buildEvents: boolean  | undefined) {
        this['build_events'] = buildEvents;
    }
    public get buildEvents(): boolean | undefined {
        return this['build_events'];
    }
    public withCreatedAt(createdAt: Date): RepoHook {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withEnableSslVerification(enableSslVerification: boolean): RepoHook {
        this['enable_ssl_verification'] = enableSslVerification;
        return this;
    }
    public set enableSslVerification(enableSslVerification: boolean  | undefined) {
        this['enable_ssl_verification'] = enableSslVerification;
    }
    public get enableSslVerification(): boolean | undefined {
        return this['enable_ssl_verification'];
    }
    public withId(id: number): RepoHook {
        this['id'] = id;
        return this;
    }
    public withIssuesEvents(issuesEvents: boolean): RepoHook {
        this['issues_events'] = issuesEvents;
        return this;
    }
    public set issuesEvents(issuesEvents: boolean  | undefined) {
        this['issues_events'] = issuesEvents;
    }
    public get issuesEvents(): boolean | undefined {
        return this['issues_events'];
    }
    public withMergeRequestsEvents(mergeRequestsEvents: boolean): RepoHook {
        this['merge_requests_events'] = mergeRequestsEvents;
        return this;
    }
    public set mergeRequestsEvents(mergeRequestsEvents: boolean  | undefined) {
        this['merge_requests_events'] = mergeRequestsEvents;
    }
    public get mergeRequestsEvents(): boolean | undefined {
        return this['merge_requests_events'];
    }
    public withNoteEvents(noteEvents: boolean): RepoHook {
        this['note_events'] = noteEvents;
        return this;
    }
    public set noteEvents(noteEvents: boolean  | undefined) {
        this['note_events'] = noteEvents;
    }
    public get noteEvents(): boolean | undefined {
        return this['note_events'];
    }
    public withPipelineEvents(pipelineEvents: boolean): RepoHook {
        this['pipeline_events'] = pipelineEvents;
        return this;
    }
    public set pipelineEvents(pipelineEvents: boolean  | undefined) {
        this['pipeline_events'] = pipelineEvents;
    }
    public get pipelineEvents(): boolean | undefined {
        return this['pipeline_events'];
    }
    public withProjectId(projectId: number): RepoHook {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: number  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): number | undefined {
        return this['project_id'];
    }
    public withPushEvents(pushEvents: boolean): RepoHook {
        this['push_events'] = pushEvents;
        return this;
    }
    public set pushEvents(pushEvents: boolean  | undefined) {
        this['push_events'] = pushEvents;
    }
    public get pushEvents(): boolean | undefined {
        return this['push_events'];
    }
    public withRepositoryUpdateEvents(repositoryUpdateEvents: boolean): RepoHook {
        this['repository_update_events'] = repositoryUpdateEvents;
        return this;
    }
    public set repositoryUpdateEvents(repositoryUpdateEvents: boolean  | undefined) {
        this['repository_update_events'] = repositoryUpdateEvents;
    }
    public get repositoryUpdateEvents(): boolean | undefined {
        return this['repository_update_events'];
    }
    public withTagPushEvents(tagPushEvents: boolean): RepoHook {
        this['tag_push_events'] = tagPushEvents;
        return this;
    }
    public set tagPushEvents(tagPushEvents: boolean  | undefined) {
        this['tag_push_events'] = tagPushEvents;
    }
    public get tagPushEvents(): boolean | undefined {
        return this['tag_push_events'];
    }
    public withWikiPageEvents(wikiPageEvents: boolean): RepoHook {
        this['wiki_page_events'] = wikiPageEvents;
        return this;
    }
    public set wikiPageEvents(wikiPageEvents: boolean  | undefined) {
        this['wiki_page_events'] = wikiPageEvents;
    }
    public get wikiPageEvents(): boolean | undefined {
        return this['wiki_page_events'];
    }
}