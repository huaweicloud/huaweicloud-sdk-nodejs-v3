

export class UpdateBaremetalServerMetadataReq {
    public metadata?: { [key: string]: string; };
    public constructor(metadata?: { [key: string]: string; }) { 
        this['metadata'] = metadata;
    }
    public withMetadata(metadata: { [key: string]: string; }): UpdateBaremetalServerMetadataReq {
        this['metadata'] = metadata;
        return this;
    }
}