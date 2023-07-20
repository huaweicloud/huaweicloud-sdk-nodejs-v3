

export class ListSignatureDetailsRequest {
    private 'Content-Type'?: string;
    private 'app_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    private 'signature_id'?: string;
    private 'signature_name'?: string;
    private 'signature_type'?: string;
    public site?: string;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    public status?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListSignatureDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAppName(appName: string): ListSignatureDetailsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withStartTime(startTime: string): ListSignatureDetailsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListSignatureDetailsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListSignatureDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSignatureDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSignatureId(signatureId: string): ListSignatureDetailsRequest {
        this['signature_id'] = signatureId;
        return this;
    }
    public set signatureId(signatureId: string  | undefined) {
        this['signature_id'] = signatureId;
    }
    public get signatureId(): string | undefined {
        return this['signature_id'];
    }
    public withSignatureName(signatureName: string): ListSignatureDetailsRequest {
        this['signature_name'] = signatureName;
        return this;
    }
    public set signatureName(signatureName: string  | undefined) {
        this['signature_name'] = signatureName;
    }
    public get signatureName(): string | undefined {
        return this['signature_name'];
    }
    public withSignatureType(signatureType: string): ListSignatureDetailsRequest {
        this['signature_type'] = signatureType;
        return this;
    }
    public set signatureType(signatureType: string  | undefined) {
        this['signature_type'] = signatureType;
    }
    public get signatureType(): string | undefined {
        return this['signature_type'];
    }
    public withSite(site: string): ListSignatureDetailsRequest {
        this['site'] = site;
        return this;
    }
    public withSortDir(sortDir: string): ListSignatureDetailsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListSignatureDetailsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withStatus(status: string): ListSignatureDetailsRequest {
        this['status'] = status;
        return this;
    }
}