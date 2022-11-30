

export class ListDomainLogsRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'domain_name': string | undefined;
    private 'query_date': string | undefined;
    private 'page_size'?: number | undefined;
    private 'page_number'?: number | undefined;
    public constructor(domainName?: any, queryDate?: any) { 
        this['domain_name'] = domainName;
        this['query_date'] = queryDate;
    }
    public withAuthorization(authorization: string): ListDomainLogsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListDomainLogsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withDomainName(domainName: string): ListDomainLogsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withQueryDate(queryDate: string): ListDomainLogsRequest {
        this['query_date'] = queryDate;
        return this;
    }
    public set queryDate(queryDate: string | undefined) {
        this['query_date'] = queryDate;
    }
    public get queryDate() {
        return this['query_date'];
    }
    public withPageSize(pageSize: number): ListDomainLogsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize() {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ListDomainLogsRequest {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber() {
        return this['page_number'];
    }
}