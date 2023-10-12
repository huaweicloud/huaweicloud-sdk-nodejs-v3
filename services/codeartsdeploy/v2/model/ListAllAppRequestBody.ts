

export class ListAllAppRequestBody {
    private 'project_id'?: string;
    public page?: number;
    public size?: number;
    private 'sort_name'?: ListAllAppRequestBodySortNameEnum | string;
    private 'sort_by'?: string;
    public states?: Array<ListAllAppRequestBodyStatesEnum> | Array<string>;
    private 'group_id'?: string;
    public constructor(projectId?: string, page?: number, size?: number) { 
        this['project_id'] = projectId;
        this['page'] = page;
        this['size'] = size;
    }
    public withProjectId(projectId: string): ListAllAppRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPage(page: number): ListAllAppRequestBody {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListAllAppRequestBody {
        this['size'] = size;
        return this;
    }
    public withSortName(sortName: ListAllAppRequestBodySortNameEnum | string): ListAllAppRequestBody {
        this['sort_name'] = sortName;
        return this;
    }
    public set sortName(sortName: ListAllAppRequestBodySortNameEnum | string  | undefined) {
        this['sort_name'] = sortName;
    }
    public get sortName(): ListAllAppRequestBodySortNameEnum | string | undefined {
        return this['sort_name'];
    }
    public withSortBy(sortBy: string): ListAllAppRequestBody {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withStates(states: Array<ListAllAppRequestBodyStatesEnum> | Array<string>): ListAllAppRequestBody {
        this['states'] = states;
        return this;
    }
    public withGroupId(groupId: string): ListAllAppRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAllAppRequestBodySortNameEnum {
    NAME = 'name',
    STARTTIME = 'startTime'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAllAppRequestBodyStatesEnum {
    ABORT = 'abort',
    FAILED = 'failed',
    NOT_STARTED = 'not_started',
    PENDING = 'pending',
    RUNNING = 'running',
    SUCCEEDED = 'succeeded',
    TIMEOUT = 'timeout',
    NOT_EXECUTED = 'not_executed'
}
