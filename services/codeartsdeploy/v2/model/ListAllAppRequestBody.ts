

export class ListAllAppRequestBody {
    private 'project_id'?: string;
    public page?: number;
    public size?: number;
    private 'sort_name'?: ListAllAppRequestBodySortNameEnum | string;
    private 'sort_by'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
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
}

/**
    * @export
    * @enum {string}
    */
export enum ListAllAppRequestBodySortNameEnum {
    NAME = 'name',
    STARTTIME = 'startTime'
}
