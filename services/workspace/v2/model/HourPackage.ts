import { ResourcePackageDescription } from './ResourcePackageDescription';


export class HourPackage {
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'desktop_resource_spec_code'?: string;
    public descriptions?: ResourcePackageDescription;
    private 'package_duration'?: number;
    private 'domain_ids'?: Array<string>;
    public status?: string;
    public constructor() { 
    }
    public withCloudServiceType(cloudServiceType: string): HourPackage {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): HourPackage {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): HourPackage {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withDesktopResourceSpecCode(desktopResourceSpecCode: string): HourPackage {
        this['desktop_resource_spec_code'] = desktopResourceSpecCode;
        return this;
    }
    public set desktopResourceSpecCode(desktopResourceSpecCode: string  | undefined) {
        this['desktop_resource_spec_code'] = desktopResourceSpecCode;
    }
    public get desktopResourceSpecCode(): string | undefined {
        return this['desktop_resource_spec_code'];
    }
    public withDescriptions(descriptions: ResourcePackageDescription): HourPackage {
        this['descriptions'] = descriptions;
        return this;
    }
    public withPackageDuration(packageDuration: number): HourPackage {
        this['package_duration'] = packageDuration;
        return this;
    }
    public set packageDuration(packageDuration: number  | undefined) {
        this['package_duration'] = packageDuration;
    }
    public get packageDuration(): number | undefined {
        return this['package_duration'];
    }
    public withDomainIds(domainIds: Array<string>): HourPackage {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
    public withStatus(status: string): HourPackage {
        this['status'] = status;
        return this;
    }
}