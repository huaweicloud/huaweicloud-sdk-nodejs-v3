

export class DeleteMetadata2Request {
    private 'metadata_id'?: string;
    public constructor(metadataId?: string) { 
        this['metadata_id'] = metadataId;
    }
    public withMetadataId(metadataId: string): DeleteMetadata2Request {
        this['metadata_id'] = metadataId;
        return this;
    }
    public set metadataId(metadataId: string  | undefined) {
        this['metadata_id'] = metadataId;
    }
    public get metadataId(): string | undefined {
        return this['metadata_id'];
    }
}