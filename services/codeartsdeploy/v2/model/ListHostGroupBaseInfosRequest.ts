

export class ListHostGroupBaseInfosRequest {
    private 'application_id'?: string;
    private 'project_uuid'?: string;
    public os?: ListHostGroupBaseInfosRequestOsEnum | string;
    private 'page_index'?: number;
    private 'page_size'?: number;
    public name?: string;
    public constructor(applicationId?: string, projectUuid?: string) { 
        this['application_id'] = applicationId;
        this['project_uuid'] = projectUuid;
    }
    public withApplicationId(applicationId: string): ListHostGroupBaseInfosRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withProjectUuid(projectUuid: string): ListHostGroupBaseInfosRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withOs(os: ListHostGroupBaseInfosRequestOsEnum | string): ListHostGroupBaseInfosRequest {
        this['os'] = os;
        return this;
    }
    public withPageIndex(pageIndex: number): ListHostGroupBaseInfosRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ListHostGroupBaseInfosRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withName(name: string): ListHostGroupBaseInfosRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHostGroupBaseInfosRequestOsEnum {
    LINUX = 'linux',
    WINDOWS = 'windows'
}
