

export class ImageScanPolicyRespInfoRegistryList {
    private 'is_selected'?: boolean;
    private 'registry_name'?: string;
    private 'registry_id'?: string;
    private 'registry_type'?: string;
    public constructor() { 
    }
    public withIsSelected(isSelected: boolean): ImageScanPolicyRespInfoRegistryList {
        this['is_selected'] = isSelected;
        return this;
    }
    public set isSelected(isSelected: boolean  | undefined) {
        this['is_selected'] = isSelected;
    }
    public get isSelected(): boolean | undefined {
        return this['is_selected'];
    }
    public withRegistryName(registryName: string): ImageScanPolicyRespInfoRegistryList {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryId(registryId: string): ImageScanPolicyRespInfoRegistryList {
        this['registry_id'] = registryId;
        return this;
    }
    public set registryId(registryId: string  | undefined) {
        this['registry_id'] = registryId;
    }
    public get registryId(): string | undefined {
        return this['registry_id'];
    }
    public withRegistryType(registryType: string): ImageScanPolicyRespInfoRegistryList {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
}