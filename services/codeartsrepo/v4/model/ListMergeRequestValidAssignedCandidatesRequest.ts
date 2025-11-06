

export class ListMergeRequestValidAssignedCandidatesRequest {
    private 'repository_id'?: number;
    private 'target_branch'?: string;
    private 'merge_request_iid'?: number;
    public offset?: number;
    public limit?: number;
    public search?: string;
    private 'search_by_name_list'?: string;
    private 'target_project_id'?: string;
    public view?: ListMergeRequestValidAssignedCandidatesRequestViewEnum | string;
    public mode?: ListMergeRequestValidAssignedCandidatesRequestModeEnum | string;
    private 'only_developers'?: boolean;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestValidAssignedCandidatesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTargetBranch(targetBranch: string): ListMergeRequestValidAssignedCandidatesRequest {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ListMergeRequestValidAssignedCandidatesRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withOffset(offset: number): ListMergeRequestValidAssignedCandidatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestValidAssignedCandidatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearch(search: string): ListMergeRequestValidAssignedCandidatesRequest {
        this['search'] = search;
        return this;
    }
    public withSearchByNameList(searchByNameList: string): ListMergeRequestValidAssignedCandidatesRequest {
        this['search_by_name_list'] = searchByNameList;
        return this;
    }
    public set searchByNameList(searchByNameList: string  | undefined) {
        this['search_by_name_list'] = searchByNameList;
    }
    public get searchByNameList(): string | undefined {
        return this['search_by_name_list'];
    }
    public withTargetProjectId(targetProjectId: string): ListMergeRequestValidAssignedCandidatesRequest {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
    public withView(view: ListMergeRequestValidAssignedCandidatesRequestViewEnum | string): ListMergeRequestValidAssignedCandidatesRequest {
        this['view'] = view;
        return this;
    }
    public withMode(mode: ListMergeRequestValidAssignedCandidatesRequestModeEnum | string): ListMergeRequestValidAssignedCandidatesRequest {
        this['mode'] = mode;
        return this;
    }
    public withOnlyDevelopers(onlyDevelopers: boolean): ListMergeRequestValidAssignedCandidatesRequest {
        this['only_developers'] = onlyDevelopers;
        return this;
    }
    public set onlyDevelopers(onlyDevelopers: boolean  | undefined) {
        this['only_developers'] = onlyDevelopers;
    }
    public get onlyDevelopers(): boolean | undefined {
        return this['only_developers'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMergeRequestValidAssignedCandidatesRequestViewEnum {
    APPROVER = 'approver',
    ASSIGNEE = 'assignee'
}
/**
    * @export
    * @enum {string}
    */
export enum ListMergeRequestValidAssignedCandidatesRequestModeEnum {
    APPROVER = 'approver',
    ASSIGNEE = 'assignee'
}
