

export class ShowHistoryTasksRequest {
    private 'enterprise_project_id'?: string;
    private 'page_size'?: number;
    private 'page_number'?: number;
    public status?: ShowHistoryTasksRequestStatusEnum | string;
    private 'start_date'?: number;
    private 'end_date'?: number;
    private 'order_field'?: string;
    private 'order_type'?: string;
    private 'file_type'?: ShowHistoryTasksRequestFileTypeEnum | string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowHistoryTasksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPageSize(pageSize: number): ShowHistoryTasksRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ShowHistoryTasksRequest {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withStatus(status: ShowHistoryTasksRequestStatusEnum | string): ShowHistoryTasksRequest {
        this['status'] = status;
        return this;
    }
    public withStartDate(startDate: number): ShowHistoryTasksRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): number | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: number): ShowHistoryTasksRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: number  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): number | undefined {
        return this['end_date'];
    }
    public withOrderField(orderField: string): ShowHistoryTasksRequest {
        this['order_field'] = orderField;
        return this;
    }
    public set orderField(orderField: string  | undefined) {
        this['order_field'] = orderField;
    }
    public get orderField(): string | undefined {
        return this['order_field'];
    }
    public withOrderType(orderType: string): ShowHistoryTasksRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): string | undefined {
        return this['order_type'];
    }
    public withFileType(fileType: ShowHistoryTasksRequestFileTypeEnum | string): ShowHistoryTasksRequest {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: ShowHistoryTasksRequestFileTypeEnum | string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): ShowHistoryTasksRequestFileTypeEnum | string | undefined {
        return this['file_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHistoryTasksRequestStatusEnum {
    TASK_INPROCESS = 'task_inprocess',
    TASK_DONE = 'task_done'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowHistoryTasksRequestFileTypeEnum {
    FILE = 'file',
    DIRECTORY = 'directory'
}
