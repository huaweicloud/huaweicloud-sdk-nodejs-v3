

export class ScalingPolicyV2MetaData {
    private 'metadata_bandwidth_share_type'?: string;
    private 'metadata_eip_id'?: string;
    private 'metadata_eip_address'?: string;
    public constructor() { 
    }
    public withMetadataBandwidthShareType(metadataBandwidthShareType: string): ScalingPolicyV2MetaData {
        this['metadata_bandwidth_share_type'] = metadataBandwidthShareType;
        return this;
    }
    public set metadataBandwidthShareType(metadataBandwidthShareType: string  | undefined) {
        this['metadata_bandwidth_share_type'] = metadataBandwidthShareType;
    }
    public get metadataBandwidthShareType(): string | undefined {
        return this['metadata_bandwidth_share_type'];
    }
    public withMetadataEipId(metadataEipId: string): ScalingPolicyV2MetaData {
        this['metadata_eip_id'] = metadataEipId;
        return this;
    }
    public set metadataEipId(metadataEipId: string  | undefined) {
        this['metadata_eip_id'] = metadataEipId;
    }
    public get metadataEipId(): string | undefined {
        return this['metadata_eip_id'];
    }
    public withMetadataEipAddress(metadataEipAddress: string): ScalingPolicyV2MetaData {
        this['metadata_eip_address'] = metadataEipAddress;
        return this;
    }
    public set metadataEipAddress(metadataEipAddress: string  | undefined) {
        this['metadata_eip_address'] = metadataEipAddress;
    }
    public get metadataEipAddress(): string | undefined {
        return this['metadata_eip_address'];
    }
}