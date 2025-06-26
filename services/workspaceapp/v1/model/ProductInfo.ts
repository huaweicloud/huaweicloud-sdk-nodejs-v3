

export class ProductInfo {
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    public type?: string;
    public architecture?: string;
    public cpu?: string;
    private 'cpu_desc'?: string;
    public memory?: string;
    private 'is_gpu'?: boolean;
    private 'system_disk_type'?: string;
    private 'system_disk_size'?: string;
    private 'gpu_desc'?: string;
    public descriptions?: string;
    private 'charge_mode'?: string;
    private 'contain_data_disk'?: boolean;
    private 'resource_type'?: string;
    private 'cloud_service_type'?: string;
    private 'volume_product_type'?: string;
    public sessions?: number;
    public status?: string;
    private 'cond_operation_az'?: string;
    private 'sub_product_list'?: Array<string>;
    private 'domain_ids'?: Array<string>;
    private 'package_type'?: string;
    private 'series_type'?: string;
    private 'expire_time'?: Date;
    private 'support_gpu_type'?: string;
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
    public withArchitecture(architecture: string): ProductInfo {
        this['architecture'] = architecture;
        return this;
    }
    public withCpu(cpu: string): ProductInfo {
        this['cpu'] = cpu;
        return this;
    }
    public withCpuDesc(cpuDesc: string): ProductInfo {
        this['cpu_desc'] = cpuDesc;
        return this;
    }
    public set cpuDesc(cpuDesc: string  | undefined) {
        this['cpu_desc'] = cpuDesc;
    }
    public get cpuDesc(): string | undefined {
        return this['cpu_desc'];
    }
    public withMemory(memory: string): ProductInfo {
        this['memory'] = memory;
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
    public withGpuDesc(gpuDesc: string): ProductInfo {
        this['gpu_desc'] = gpuDesc;
        return this;
    }
    public set gpuDesc(gpuDesc: string  | undefined) {
        this['gpu_desc'] = gpuDesc;
    }
    public get gpuDesc(): string | undefined {
        return this['gpu_desc'];
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
    public withSessions(sessions: number): ProductInfo {
        this['sessions'] = sessions;
        return this;
    }
    public withStatus(status: string): ProductInfo {
        this['status'] = status;
        return this;
    }
    public withCondOperationAz(condOperationAz: string): ProductInfo {
        this['cond_operation_az'] = condOperationAz;
        return this;
    }
    public set condOperationAz(condOperationAz: string  | undefined) {
        this['cond_operation_az'] = condOperationAz;
    }
    public get condOperationAz(): string | undefined {
        return this['cond_operation_az'];
    }
    public withSubProductList(subProductList: Array<string>): ProductInfo {
        this['sub_product_list'] = subProductList;
        return this;
    }
    public set subProductList(subProductList: Array<string>  | undefined) {
        this['sub_product_list'] = subProductList;
    }
    public get subProductList(): Array<string> | undefined {
        return this['sub_product_list'];
    }
    public withDomainIds(domainIds: Array<string>): ProductInfo {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
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
    public withSeriesType(seriesType: string): ProductInfo {
        this['series_type'] = seriesType;
        return this;
    }
    public set seriesType(seriesType: string  | undefined) {
        this['series_type'] = seriesType;
    }
    public get seriesType(): string | undefined {
        return this['series_type'];
    }
    public withExpireTime(expireTime: Date): ProductInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: Date  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): Date | undefined {
        return this['expire_time'];
    }
    public withSupportGpuType(supportGpuType: string): ProductInfo {
        this['support_gpu_type'] = supportGpuType;
        return this;
    }
    public set supportGpuType(supportGpuType: string  | undefined) {
        this['support_gpu_type'] = supportGpuType;
    }
    public get supportGpuType(): string | undefined {
        return this['support_gpu_type'];
    }
}