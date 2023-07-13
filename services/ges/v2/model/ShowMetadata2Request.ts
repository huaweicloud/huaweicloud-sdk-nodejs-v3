

export class ShowMetadata2Request {
    private 'metadata_id': string | undefined;
    public constructor(metadataId?: any) { 
        this['metadata_id'] = metadataId;
    }
    public withMetadataId(metadataId: string): ShowMetadata2Request {
        this['metadata_id'] = metadataId;
        return this;
    }
    public set metadataId(metadataId: string | undefined) {
        this['metadata_id'] = metadataId;
    }
    public get metadataId() {
        return this['metadata_id'];
    }
}