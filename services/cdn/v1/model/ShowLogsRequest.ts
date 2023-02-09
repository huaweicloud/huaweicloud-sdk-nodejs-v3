

export class ShowLogsRequest {
    private 'domain_name': string | undefined;
    private 'query_date': number | undefined;
    private 'page_size'?: number | undefined;
    private 'page_number'?: number | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(domainName?: any, queryDate?: any) { 
        this['domain_name'] = domainName;
        this['query_date'] = queryDate;
    }
    public withDomainName(domainName: string): ShowLogsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withQueryDate(queryDate: number): ShowLogsRequest {
        this['query_date'] = queryDate;
        return this;
    }
    public set queryDate(queryDate: number | undefined) {
        this['query_date'] = queryDate;
    }
    public get queryDate() {
        return this['query_date'];
    }
    public withPageSize(pageSize: number): ShowLogsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize() {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ShowLogsRequest {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber() {
        return this['page_number'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}