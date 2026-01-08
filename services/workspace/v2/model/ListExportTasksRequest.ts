

export class ListExportTasksRequest {
    private 'file_name'?: string;
    private 'task_id'?: string;
    public status?: ListExportTasksRequestStatusEnum | string;
    private 'is_download'?: boolean;
    private 'sort_field'?: ListExportTasksRequestSortFieldEnum | string;
    private 'sort_type'?: ListExportTasksRequestSortTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withFileName(fileName: string): ListExportTasksRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withTaskId(taskId: string): ListExportTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: ListExportTasksRequestStatusEnum | string): ListExportTasksRequest {
        this['status'] = status;
        return this;
    }
    public withIsDownload(isDownload: boolean): ListExportTasksRequest {
        this['is_download'] = isDownload;
        return this;
    }
    public set isDownload(isDownload: boolean  | undefined) {
        this['is_download'] = isDownload;
    }
    public get isDownload(): boolean | undefined {
        return this['is_download'];
    }
    public withSortField(sortField: ListExportTasksRequestSortFieldEnum | string): ListExportTasksRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListExportTasksRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListExportTasksRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ListExportTasksRequestSortTypeEnum | string): ListExportTasksRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ListExportTasksRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ListExportTasksRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
    public withOffset(offset: number): ListExportTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListExportTasksRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListExportTasksRequestStatusEnum {
    CREATING = 'CREATING',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    EXPIRED = 'EXPIRED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListExportTasksRequestSortFieldEnum {
    CREATE_TIME = 'create_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListExportTasksRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
