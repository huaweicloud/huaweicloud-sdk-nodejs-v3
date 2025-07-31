

export class ListFileEventsRequest {
    private 'enterprise_project_id'?: string;
    private 'host_name'?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'file_name'?: string;
    private 'file_path'?: string;
    private 'change_type'?: string;
    private 'change_category'?: string;
    public status?: string;
    public offset?: number;
    public limit?: number;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListFileEventsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostName(hostName: string): ListFileEventsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withBeginTime(beginTime: number): ListFileEventsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ListFileEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withFileName(fileName: string): ListFileEventsRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): ListFileEventsRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withChangeType(changeType: string): ListFileEventsRequest {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withChangeCategory(changeCategory: string): ListFileEventsRequest {
        this['change_category'] = changeCategory;
        return this;
    }
    public set changeCategory(changeCategory: string  | undefined) {
        this['change_category'] = changeCategory;
    }
    public get changeCategory(): string | undefined {
        return this['change_category'];
    }
    public withStatus(status: string): ListFileEventsRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): ListFileEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFileEventsRequest {
        this['limit'] = limit;
        return this;
    }
}