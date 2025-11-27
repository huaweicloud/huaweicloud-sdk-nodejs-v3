

export class ListSpecialConfigurationRequest {
    private 'domain_name'?: string;
    private 'page_size'?: number;
    private 'page_number'?: number;
    public constructor(domainName?: string) { 
        this['domain_name'] = domainName;
    }
    public withDomainName(domainName: string): ListSpecialConfigurationRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withPageSize(pageSize: number): ListSpecialConfigurationRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ListSpecialConfigurationRequest {
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