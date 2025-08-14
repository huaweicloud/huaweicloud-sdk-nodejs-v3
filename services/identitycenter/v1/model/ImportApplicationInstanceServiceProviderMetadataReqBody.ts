

export class ImportApplicationInstanceServiceProviderMetadataReqBody {
    public metadata?: string;
    public constructor(metadata?: string) { 
        this['metadata'] = metadata;
    }
    public withMetadata(metadata: string): ImportApplicationInstanceServiceProviderMetadataReqBody {
        this['metadata'] = metadata;
        return this;
    }
}