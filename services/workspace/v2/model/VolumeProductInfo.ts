import { I18nLanguage } from './I18nLanguage';


export class VolumeProductInfo {
    private 'resource_spec_code'?: string;
    private 'volume_type'?: string;
    private 'volume_product_type'?: string;
    private 'resource_type'?: string;
    private 'cloud_service_type'?: string;
    private 'domain_ids'?: Array<string>;
    public name?: Array<I18nLanguage>;
    public status?: string;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): VolumeProductInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withVolumeType(volumeType: string): VolumeProductInfo {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withVolumeProductType(volumeProductType: string): VolumeProductInfo {
        this['volume_product_type'] = volumeProductType;
        return this;
    }
    public set volumeProductType(volumeProductType: string  | undefined) {
        this['volume_product_type'] = volumeProductType;
    }
    public get volumeProductType(): string | undefined {
        return this['volume_product_type'];
    }
    public withResourceType(resourceType: string): VolumeProductInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCloudServiceType(cloudServiceType: string): VolumeProductInfo {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withDomainIds(domainIds: Array<string>): VolumeProductInfo {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
    public withName(name: Array<I18nLanguage>): VolumeProductInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): VolumeProductInfo {
        this['status'] = status;
        return this;
    }
}