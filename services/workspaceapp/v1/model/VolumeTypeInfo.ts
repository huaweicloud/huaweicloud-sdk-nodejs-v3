import { VolumeTypeExtraSpecs } from './VolumeTypeExtraSpecs';


export class VolumeTypeInfo {
    private 'resource_spec_code'?: string;
    private 'volume_type'?: string;
    private 'volume_product_type'?: string;
    private 'resource_type'?: string;
    private 'cloud_service_type'?: string;
    public name?: Array<{ [key: string]: string; }>;
    private 'volume_type_extra_specs'?: VolumeTypeExtraSpecs;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): VolumeTypeInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withVolumeType(volumeType: string): VolumeTypeInfo {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withVolumeProductType(volumeProductType: string): VolumeTypeInfo {
        this['volume_product_type'] = volumeProductType;
        return this;
    }
    public set volumeProductType(volumeProductType: string  | undefined) {
        this['volume_product_type'] = volumeProductType;
    }
    public get volumeProductType(): string | undefined {
        return this['volume_product_type'];
    }
    public withResourceType(resourceType: string): VolumeTypeInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCloudServiceType(cloudServiceType: string): VolumeTypeInfo {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withName(name: Array<{ [key: string]: string; }>): VolumeTypeInfo {
        this['name'] = name;
        return this;
    }
    public withVolumeTypeExtraSpecs(volumeTypeExtraSpecs: VolumeTypeExtraSpecs): VolumeTypeInfo {
        this['volume_type_extra_specs'] = volumeTypeExtraSpecs;
        return this;
    }
    public set volumeTypeExtraSpecs(volumeTypeExtraSpecs: VolumeTypeExtraSpecs  | undefined) {
        this['volume_type_extra_specs'] = volumeTypeExtraSpecs;
    }
    public get volumeTypeExtraSpecs(): VolumeTypeExtraSpecs | undefined {
        return this['volume_type_extra_specs'];
    }
}