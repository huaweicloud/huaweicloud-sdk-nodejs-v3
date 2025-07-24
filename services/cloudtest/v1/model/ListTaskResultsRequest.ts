

export class ListTaskResultsRequest {
    private 'project_uuid'?: string;
    private 'task_uri'?: string;
    private 'iterator_uri'?: string;
    private 'page_no'?: string;
    private 'page_size'?: string;
    private 'release_dev'?: string;
    public constructor(projectUuid?: string, taskUri?: string, pageNo?: string, pageSize?: string) { 
        this['project_uuid'] = projectUuid;
        this['task_uri'] = taskUri;
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withProjectUuid(projectUuid: string): ListTaskResultsRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withTaskUri(taskUri: string): ListTaskResultsRequest {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withIteratorUri(iteratorUri: string): ListTaskResultsRequest {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
    public withPageNo(pageNo: string): ListTaskResultsRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: string  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): string | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: string): ListTaskResultsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
    public withReleaseDev(releaseDev: string): ListTaskResultsRequest {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
}