

export class ListPipelineQuery {
    private 'project_id'?: string;
    private 'project_ids'?: Array<string>;
    private 'component_id'?: string;
    public name?: string;
    public status?: Array<string>;
    private 'is_publish'?: boolean;
    private 'creator_id'?: string;
    private 'creator_ids'?: Array<string>;
    private 'executor_ids'?: Array<string>;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'group_path_id'?: string;
    private 'by_group'?: boolean;
    private 'is_banned'?: boolean;
    private 'query_new'?: boolean;
    private 'security_level_list'?: Array<number>;
    public constructor() { 
    }
    public withProjectId(projectId: string): ListPipelineQuery {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectIds(projectIds: Array<string>): ListPipelineQuery {
        this['project_ids'] = projectIds;
        return this;
    }
    public set projectIds(projectIds: Array<string>  | undefined) {
        this['project_ids'] = projectIds;
    }
    public get projectIds(): Array<string> | undefined {
        return this['project_ids'];
    }
    public withComponentId(componentId: string): ListPipelineQuery {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withName(name: string): ListPipelineQuery {
        this['name'] = name;
        return this;
    }
    public withStatus(status: Array<string>): ListPipelineQuery {
        this['status'] = status;
        return this;
    }
    public withIsPublish(isPublish: boolean): ListPipelineQuery {
        this['is_publish'] = isPublish;
        return this;
    }
    public set isPublish(isPublish: boolean  | undefined) {
        this['is_publish'] = isPublish;
    }
    public get isPublish(): boolean | undefined {
        return this['is_publish'];
    }
    public withCreatorId(creatorId: string): ListPipelineQuery {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorIds(creatorIds: Array<string>): ListPipelineQuery {
        this['creator_ids'] = creatorIds;
        return this;
    }
    public set creatorIds(creatorIds: Array<string>  | undefined) {
        this['creator_ids'] = creatorIds;
    }
    public get creatorIds(): Array<string> | undefined {
        return this['creator_ids'];
    }
    public withExecutorIds(executorIds: Array<string>): ListPipelineQuery {
        this['executor_ids'] = executorIds;
        return this;
    }
    public set executorIds(executorIds: Array<string>  | undefined) {
        this['executor_ids'] = executorIds;
    }
    public get executorIds(): Array<string> | undefined {
        return this['executor_ids'];
    }
    public withStartTime(startTime: string): ListPipelineQuery {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListPipelineQuery {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListPipelineQuery {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineQuery {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListPipelineQuery {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPipelineQuery {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withGroupPathId(groupPathId: string): ListPipelineQuery {
        this['group_path_id'] = groupPathId;
        return this;
    }
    public set groupPathId(groupPathId: string  | undefined) {
        this['group_path_id'] = groupPathId;
    }
    public get groupPathId(): string | undefined {
        return this['group_path_id'];
    }
    public withByGroup(byGroup: boolean): ListPipelineQuery {
        this['by_group'] = byGroup;
        return this;
    }
    public set byGroup(byGroup: boolean  | undefined) {
        this['by_group'] = byGroup;
    }
    public get byGroup(): boolean | undefined {
        return this['by_group'];
    }
    public withIsBanned(isBanned: boolean): ListPipelineQuery {
        this['is_banned'] = isBanned;
        return this;
    }
    public set isBanned(isBanned: boolean  | undefined) {
        this['is_banned'] = isBanned;
    }
    public get isBanned(): boolean | undefined {
        return this['is_banned'];
    }
    public withQueryNew(queryNew: boolean): ListPipelineQuery {
        this['query_new'] = queryNew;
        return this;
    }
    public set queryNew(queryNew: boolean  | undefined) {
        this['query_new'] = queryNew;
    }
    public get queryNew(): boolean | undefined {
        return this['query_new'];
    }
    public withSecurityLevelList(securityLevelList: Array<number>): ListPipelineQuery {
        this['security_level_list'] = securityLevelList;
        return this;
    }
    public set securityLevelList(securityLevelList: Array<number>  | undefined) {
        this['security_level_list'] = securityLevelList;
    }
    public get securityLevelList(): Array<number> | undefined {
        return this['security_level_list'];
    }
}