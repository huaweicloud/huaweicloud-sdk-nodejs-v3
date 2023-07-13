

export class DownloadKeystoreRequest {
    private 'file_name': string | undefined;
    private 'domain_id': string | undefined;
    public constructor(fileName?: any, domainId?: any) { 
        this['file_name'] = fileName;
        this['domain_id'] = domainId;
    }
    public withFileName(fileName: string): DownloadKeystoreRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withDomainId(domainId: string): DownloadKeystoreRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
}