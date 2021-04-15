

export class UpdateServerMetadataRequestBody {
    public metadata: { [key: string]: string; };
    public constructor(metadata?: any) { 
        this['metadata'] = metadata;
    }
    public withMetadata(metadata: { [key: string]: string; }): UpdateServerMetadataRequestBody {
        this['metadata'] = metadata;
        return this;
    }
}