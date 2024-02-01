

export class ShowLogsRequest {
    private 'domain_name'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'page_size'?: number;
    private 'page_number'?: number;
    private 'enterprise_project_id'?: string;
    public constructor(domainName?: string) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): ShowLogsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withStartTime(startTime: number): ShowLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPageSize(pageSize: number): ShowLogsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ShowLogsRequest {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}