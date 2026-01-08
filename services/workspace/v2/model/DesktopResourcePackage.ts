import { ResourcePackage } from './ResourcePackage';


export class DesktopResourcePackage {
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'package_type'?: string;
    public cpu?: string;
    public architecture?: string;
    public memory?: string;
    private 'domain_ids'?: Array<string>;
    public name?: { [key: string]: string; };
    public description?: { [key: string]: string; };
    private 'resource_packages'?: Array<ResourcePackage>;
    public constructor() { 
    }
    public withCloudServiceType(cloudServiceType: string): DesktopResourcePackage {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): DesktopResourcePackage {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): DesktopResourcePackage {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withPackageType(packageType: string): DesktopResourcePackage {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withCpu(cpu: string): DesktopResourcePackage {
        this['cpu'] = cpu;
        return this;
    }
    public withArchitecture(architecture: string): DesktopResourcePackage {
        this['architecture'] = architecture;
        return this;
    }
    public withMemory(memory: string): DesktopResourcePackage {
        this['memory'] = memory;
        return this;
    }
    public withDomainIds(domainIds: Array<string>): DesktopResourcePackage {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
    public withName(name: { [key: string]: string; }): DesktopResourcePackage {
        this['name'] = name;
        return this;
    }
    public withDescription(description: { [key: string]: string; }): DesktopResourcePackage {
        this['description'] = description;
        return this;
    }
    public withResourcePackages(resourcePackages: Array<ResourcePackage>): DesktopResourcePackage {
        this['resource_packages'] = resourcePackages;
        return this;
    }
    public set resourcePackages(resourcePackages: Array<ResourcePackage>  | undefined) {
        this['resource_packages'] = resourcePackages;
    }
    public get resourcePackages(): Array<ResourcePackage> | undefined {
        return this['resource_packages'];
    }
}