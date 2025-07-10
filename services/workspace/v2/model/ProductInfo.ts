import { SimpleProduct } from './SimpleProduct';


export class ProductInfo {
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    public type?: string;
    public cpu?: string;
    public memory?: string;
    public descriptions?: string;
    private 'charge_mode'?: string;
    public architecture?: string;
    private 'is_gpu'?: boolean;
    private 'package_type'?: string;
    private 'system_disk_type'?: string;
    private 'system_disk_size'?: string;
    private 'contain_data_disk'?: boolean;
    private 'resource_type'?: string;
    private 'cloud_service_type'?: string;
    private 'volume_product_type'?: string;
    public status?: string;
    public constructor() { 
    }
    public withProductId(productId: string): ProductInfo {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): ProductInfo {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withType(type: string): ProductInfo {
        this['type'] = type;
        return this;
    }
    public withCpu(cpu: string): ProductInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: string): ProductInfo {
        this['memory'] = memory;
        return this;
    }
    public withDescriptions(descriptions: string): ProductInfo {
        this['descriptions'] = descriptions;
        return this;
    }
    public withChargeMode(chargeMode: string): ProductInfo {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withArchitecture(architecture: string): ProductInfo {
        this['architecture'] = architecture;
        return this;
    }
    public withIsGpu(isGpu: boolean): ProductInfo {
        this['is_gpu'] = isGpu;
        return this;
    }
    public set isGpu(isGpu: boolean  | undefined) {
        this['is_gpu'] = isGpu;
    }
    public get isGpu(): boolean | undefined {
        return this['is_gpu'];
    }
    public withPackageType(packageType: string): ProductInfo {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withSystemDiskType(systemDiskType: string): ProductInfo {
        this['system_disk_type'] = systemDiskType;
        return this;
    }
    public set systemDiskType(systemDiskType: string  | undefined) {
        this['system_disk_type'] = systemDiskType;
    }
    public get systemDiskType(): string | undefined {
        return this['system_disk_type'];
    }
    public withSystemDiskSize(systemDiskSize: string): ProductInfo {
        this['system_disk_size'] = systemDiskSize;
        return this;
    }
    public set systemDiskSize(systemDiskSize: string  | undefined) {
        this['system_disk_size'] = systemDiskSize;
    }
    public get systemDiskSize(): string | undefined {
        return this['system_disk_size'];
    }
    public withContainDataDisk(containDataDisk: boolean): ProductInfo {
        this['contain_data_disk'] = containDataDisk;
        return this;
    }
    public set containDataDisk(containDataDisk: boolean  | undefined) {
        this['contain_data_disk'] = containDataDisk;
    }
    public get containDataDisk(): boolean | undefined {
        return this['contain_data_disk'];
    }
    public withResourceType(resourceType: string): ProductInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCloudServiceType(cloudServiceType: string): ProductInfo {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withVolumeProductType(volumeProductType: string): ProductInfo {
        this['volume_product_type'] = volumeProductType;
        return this;
    }
    public set volumeProductType(volumeProductType: string  | undefined) {
        this['volume_product_type'] = volumeProductType;
    }
    public get volumeProductType(): string | undefined {
        return this['volume_product_type'];
    }
    public withStatus(status: string): ProductInfo {
        this['status'] = status;
        return this;
    }
}