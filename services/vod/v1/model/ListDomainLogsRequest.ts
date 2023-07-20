

export class ListDomainLogsRequest {
    private 'X-Sdk-Date'?: string;
    private 'domain_name'?: string;
    private 'query_date'?: string;
    private 'page_size'?: number;
    private 'page_number'?: number;
    public constructor(domainName?: string, queryDate?: string) { 
        this['domain_name'] = domainName;
        this['query_date'] = queryDate;
    }
    public withXSdkDate(xSdkDate: string): ListDomainLogsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withDomainName(domainName: string): ListDomainLogsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withQueryDate(queryDate: string): ListDomainLogsRequest {
        this['query_date'] = queryDate;
        return this;
    }
    public set queryDate(queryDate: string  | undefined) {
        this['query_date'] = queryDate;
    }
    public get queryDate(): string | undefined {
        return this['query_date'];
    }
    public withPageSize(pageSize: number): ListDomainLogsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ListDomainLogsRequest {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
}