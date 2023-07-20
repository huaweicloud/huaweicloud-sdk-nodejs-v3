

export class EipMetaData {
    private 'metadata_bandwidth_share_type'?: string;
    private 'metadata_eip_id'?: string;
    private 'metadataeip_address'?: string;
    public constructor() { 
    }
    public withMetadataBandwidthShareType(metadataBandwidthShareType: string): EipMetaData {
        this['metadata_bandwidth_share_type'] = metadataBandwidthShareType;
        return this;
    }
    public set metadataBandwidthShareType(metadataBandwidthShareType: string  | undefined) {
        this['metadata_bandwidth_share_type'] = metadataBandwidthShareType;
    }
    public get metadataBandwidthShareType(): string | undefined {
        return this['metadata_bandwidth_share_type'];
    }
    public withMetadataEipId(metadataEipId: string): EipMetaData {
        this['metadata_eip_id'] = metadataEipId;
        return this;
    }
    public set metadataEipId(metadataEipId: string  | undefined) {
        this['metadata_eip_id'] = metadataEipId;
    }
    public get metadataEipId(): string | undefined {
        return this['metadata_eip_id'];
    }
    public withMetadataeipAddress(metadataeipAddress: string): EipMetaData {
        this['metadataeip_address'] = metadataeipAddress;
        return this;
    }
    public set metadataeipAddress(metadataeipAddress: string  | undefined) {
        this['metadataeip_address'] = metadataeipAddress;
    }
    public get metadataeipAddress(): string | undefined {
        return this['metadataeip_address'];
    }
}