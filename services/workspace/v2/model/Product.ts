

export class Product {
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    public type?: string;
    public architecture?: string;
    public cpu?: string;
    private 'cpu_desc'?: string;
    public memory?: string;
    private 'is_gpu'?: boolean;
    public vram?: string;
    private 'system_disk_type'?: string;
    private 'system_disk_size'?: string;
    private 'data_disk_size'?: string;
    private 'gpu_desc'?: string;
    private 'bill_switch'?: string;
    public descriptions?: string;
    private 'product_desc'?: { [key: string]: string; };
    private 'charge_mode'?: string;
    private 'contain_data_disk'?: boolean;
    private 'resource_type'?: string;
    private 'cloud_service_type'?: string;
    private 'volume_product_type'?: string;
    private 'domain_ids'?: Array<string>;
    public status?: string;
    private 'package_type'?: string;
    public name?: { [key: string]: string; };
    private 'share_space_size'?: number;
    public constructor() { 
    }
    public withProductId(productId: string): Product {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): Product {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withType(type: string): Product {
        this['type'] = type;
        return this;
    }
    public withArchitecture(architecture: string): Product {
        this['architecture'] = architecture;
        return this;
    }
    public withCpu(cpu: string): Product {
        this['cpu'] = cpu;
        return this;
    }
    public withCpuDesc(cpuDesc: string): Product {
        this['cpu_desc'] = cpuDesc;
        return this;
    }
    public set cpuDesc(cpuDesc: string  | undefined) {
        this['cpu_desc'] = cpuDesc;
    }
    public get cpuDesc(): string | undefined {
        return this['cpu_desc'];
    }
    public withMemory(memory: string): Product {
        this['memory'] = memory;
        return this;
    }
    public withIsGpu(isGpu: boolean): Product {
        this['is_gpu'] = isGpu;
        return this;
    }
    public set isGpu(isGpu: boolean  | undefined) {
        this['is_gpu'] = isGpu;
    }
    public get isGpu(): boolean | undefined {
        return this['is_gpu'];
    }
    public withVram(vram: string): Product {
        this['vram'] = vram;
        return this;
    }
    public withSystemDiskType(systemDiskType: string): Product {
        this['system_disk_type'] = systemDiskType;
        return this;
    }
    public set systemDiskType(systemDiskType: string  | undefined) {
        this['system_disk_type'] = systemDiskType;
    }
    public get systemDiskType(): string | undefined {
        return this['system_disk_type'];
    }
    public withSystemDiskSize(systemDiskSize: string): Product {
        this['system_disk_size'] = systemDiskSize;
        return this;
    }
    public set systemDiskSize(systemDiskSize: string  | undefined) {
        this['system_disk_size'] = systemDiskSize;
    }
    public get systemDiskSize(): string | undefined {
        return this['system_disk_size'];
    }
    public withDataDiskSize(dataDiskSize: string): Product {
        this['data_disk_size'] = dataDiskSize;
        return this;
    }
    public set dataDiskSize(dataDiskSize: string  | undefined) {
        this['data_disk_size'] = dataDiskSize;
    }
    public get dataDiskSize(): string | undefined {
        return this['data_disk_size'];
    }
    public withGpuDesc(gpuDesc: string): Product {
        this['gpu_desc'] = gpuDesc;
        return this;
    }
    public set gpuDesc(gpuDesc: string  | undefined) {
        this['gpu_desc'] = gpuDesc;
    }
    public get gpuDesc(): string | undefined {
        return this['gpu_desc'];
    }
    public withBillSwitch(billSwitch: string): Product {
        this['bill_switch'] = billSwitch;
        return this;
    }
    public set billSwitch(billSwitch: string  | undefined) {
        this['bill_switch'] = billSwitch;
    }
    public get billSwitch(): string | undefined {
        return this['bill_switch'];
    }
    public withDescriptions(descriptions: string): Product {
        this['descriptions'] = descriptions;
        return this;
    }
    public withProductDesc(productDesc: { [key: string]: string; }): Product {
        this['product_desc'] = productDesc;
        return this;
    }
    public set productDesc(productDesc: { [key: string]: string; }  | undefined) {
        this['product_desc'] = productDesc;
    }
    public get productDesc(): { [key: string]: string; } | undefined {
        return this['product_desc'];
    }
    public withChargeMode(chargeMode: string): Product {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withContainDataDisk(containDataDisk: boolean): Product {
        this['contain_data_disk'] = containDataDisk;
        return this;
    }
    public set containDataDisk(containDataDisk: boolean  | undefined) {
        this['contain_data_disk'] = containDataDisk;
    }
    public get containDataDisk(): boolean | undefined {
        return this['contain_data_disk'];
    }
    public withResourceType(resourceType: string): Product {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCloudServiceType(cloudServiceType: string): Product {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withVolumeProductType(volumeProductType: string): Product {
        this['volume_product_type'] = volumeProductType;
        return this;
    }
    public set volumeProductType(volumeProductType: string  | undefined) {
        this['volume_product_type'] = volumeProductType;
    }
    public get volumeProductType(): string | undefined {
        return this['volume_product_type'];
    }
    public withDomainIds(domainIds: Array<string>): Product {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
    public withStatus(status: string): Product {
        this['status'] = status;
        return this;
    }
    public withPackageType(packageType: string): Product {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withName(name: { [key: string]: string; }): Product {
        this['name'] = name;
        return this;
    }
    public withShareSpaceSize(shareSpaceSize: number): Product {
        this['share_space_size'] = shareSpaceSize;
        return this;
    }
    public set shareSpaceSize(shareSpaceSize: number  | undefined) {
        this['share_space_size'] = shareSpaceSize;
    }
    public get shareSpaceSize(): number | undefined {
        return this['share_space_size'];
    }
}