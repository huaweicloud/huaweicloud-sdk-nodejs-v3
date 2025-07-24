

export class ListTaskResultsDetailRequest {
    private 'project_uuid'?: string;
    private 'task_uri'?: string;
    private 'result_uri'?: string;
    private 'page_no'?: string;
    private 'page_size'?: string;
    public result?: string;
    public constructor(projectUuid?: string, taskUri?: string, resultUri?: string, pageNo?: string, pageSize?: string) { 
        this['project_uuid'] = projectUuid;
        this['task_uri'] = taskUri;
        this['result_uri'] = resultUri;
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withProjectUuid(projectUuid: string): ListTaskResultsDetailRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withTaskUri(taskUri: string): ListTaskResultsDetailRequest {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withResultUri(resultUri: string): ListTaskResultsDetailRequest {
        this['result_uri'] = resultUri;
        return this;
    }
    public set resultUri(resultUri: string  | undefined) {
        this['result_uri'] = resultUri;
    }
    public get resultUri(): string | undefined {
        return this['result_uri'];
    }
    public withPageNo(pageNo: string): ListTaskResultsDetailRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: string  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): string | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: string): ListTaskResultsDetailRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
    public withResult(result: string): ListTaskResultsDetailRequest {
        this['result'] = result;
        return this;
    }
}