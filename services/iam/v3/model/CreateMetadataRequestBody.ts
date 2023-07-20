

export class CreateMetadataRequestBody {
    private 'domain_id'?: string;
    private 'xaccount_type'?: string;
    public metadata?: string;
    public constructor(domainId?: string, xaccountType?: string, metadata?: string) { 
        this['domain_id'] = domainId;
        this['xaccount_type'] = xaccountType;
        this['metadata'] = metadata;
    }
    public withDomainId(domainId: string): CreateMetadataRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withXaccountType(xaccountType: string): CreateMetadataRequestBody {
        this['xaccount_type'] = xaccountType;
        return this;
    }
    public set xaccountType(xaccountType: string  | undefined) {
        this['xaccount_type'] = xaccountType;
    }
    public get xaccountType(): string | undefined {
        return this['xaccount_type'];
    }
    public withMetadata(metadata: string): CreateMetadataRequestBody {
        this['metadata'] = metadata;
        return this;
    }
}