

export class ListFileHostEventDetailsRequest {
    private 'enterprise_project_id'?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'host_id'?: string;
    private 'file_name'?: string;
    private 'file_path'?: string;
    private 'change_type'?: string;
    private 'change_category'?: string;
    public status?: string;
    public offset?: number;
    public limit?: number;
    public constructor(hostId?: string, offset?: number, limit?: number) { 
        this['host_id'] = hostId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListFileHostEventDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBeginTime(beginTime: number): ListFileHostEventDetailsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ListFileHostEventDetailsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withHostId(hostId: string): ListFileHostEventDetailsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withFileName(fileName: string): ListFileHostEventDetailsRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): ListFileHostEventDetailsRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withChangeType(changeType: string): ListFileHostEventDetailsRequest {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withChangeCategory(changeCategory: string): ListFileHostEventDetailsRequest {
        this['change_category'] = changeCategory;
        return this;
    }
    public set changeCategory(changeCategory: string  | undefined) {
        this['change_category'] = changeCategory;
    }
    public get changeCategory(): string | undefined {
        return this['change_category'];
    }
    public withStatus(status: string): ListFileHostEventDetailsRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): ListFileHostEventDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFileHostEventDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}