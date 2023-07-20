

export class DownloadKeystoreRequest {
    private 'file_name'?: string;
    private 'domain_id'?: string;
    public constructor(fileName?: string, domainId?: string) { 
        this['file_name'] = fileName;
        this['domain_id'] = domainId;
    }
    public withFileName(fileName: string): DownloadKeystoreRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withDomainId(domainId: string): DownloadKeystoreRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}