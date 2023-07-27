

export class OsExtraSpecs {
    private 'resource_type'?: OsExtraSpecsResourceTypeEnum | string;
    private 'capabilities:cpu_arch'?: OsExtraSpecsCapabilitiesCpuArchEnum | string;
    private 'baremetal:disk_detail'?: string;
    private 'capabilities:hypervisor_type'?: string;
    private 'baremetal:__support_evs'?: string;
    private 'baremetal:extBootType'?: OsExtraSpecsBaremetalExtBootTypeEnum | string;
    private 'capabilities:board_type'?: string;
    private 'baremetal:net_num'?: string;
    private 'baremetal:netcard_detail'?: string;
    private 'baremetal:cpu_detail'?: string;
    private 'baremetal:memory_detail'?: string;
    private 'cond:operation:status'?: OsExtraSpecsCondOperationStatusEnum | string;
    private 'cond:operation:az'?: string;
    public constructor(resourceType?: string, capabilitiesCpuArch?: string, baremetalDiskDetail?: string, capabilitiesHypervisorType?: string, capabilitiesBoardType?: string, baremetalNetNum?: string, baremetalNetcardDetail?: string, baremetalCpuDetail?: string, baremetalMemoryDetail?: string) { 
        this['resource_type'] = resourceType;
        this['capabilities:cpu_arch'] = capabilitiesCpuArch;
        this['baremetal:disk_detail'] = baremetalDiskDetail;
        this['capabilities:hypervisor_type'] = capabilitiesHypervisorType;
        this['capabilities:board_type'] = capabilitiesBoardType;
        this['baremetal:net_num'] = baremetalNetNum;
        this['baremetal:netcard_detail'] = baremetalNetcardDetail;
        this['baremetal:cpu_detail'] = baremetalCpuDetail;
        this['baremetal:memory_detail'] = baremetalMemoryDetail;
    }
    public withResourceType(resourceType: OsExtraSpecsResourceTypeEnum | string): OsExtraSpecs {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: OsExtraSpecsResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): OsExtraSpecsResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withCapabilitiesCpuArch(capabilitiesCpuArch: OsExtraSpecsCapabilitiesCpuArchEnum | string): OsExtraSpecs {
        this['capabilities:cpu_arch'] = capabilitiesCpuArch;
        return this;
    }
    public set capabilitiesCpuArch(capabilitiesCpuArch: OsExtraSpecsCapabilitiesCpuArchEnum | string  | undefined) {
        this['capabilities:cpu_arch'] = capabilitiesCpuArch;
    }
    public get capabilitiesCpuArch(): OsExtraSpecsCapabilitiesCpuArchEnum | string | undefined {
        return this['capabilities:cpu_arch'];
    }
    public withBaremetalDiskDetail(baremetalDiskDetail: string): OsExtraSpecs {
        this['baremetal:disk_detail'] = baremetalDiskDetail;
        return this;
    }
    public set baremetalDiskDetail(baremetalDiskDetail: string  | undefined) {
        this['baremetal:disk_detail'] = baremetalDiskDetail;
    }
    public get baremetalDiskDetail(): string | undefined {
        return this['baremetal:disk_detail'];
    }
    public withCapabilitiesHypervisorType(capabilitiesHypervisorType: string): OsExtraSpecs {
        this['capabilities:hypervisor_type'] = capabilitiesHypervisorType;
        return this;
    }
    public set capabilitiesHypervisorType(capabilitiesHypervisorType: string  | undefined) {
        this['capabilities:hypervisor_type'] = capabilitiesHypervisorType;
    }
    public get capabilitiesHypervisorType(): string | undefined {
        return this['capabilities:hypervisor_type'];
    }
    public withBaremetalSupportEvs(baremetalSupportEvs: string): OsExtraSpecs {
        this['baremetal:__support_evs'] = baremetalSupportEvs;
        return this;
    }
    public set baremetalSupportEvs(baremetalSupportEvs: string  | undefined) {
        this['baremetal:__support_evs'] = baremetalSupportEvs;
    }
    public get baremetalSupportEvs(): string | undefined {
        return this['baremetal:__support_evs'];
    }
    public withBaremetalExtBootType(baremetalExtBootType: OsExtraSpecsBaremetalExtBootTypeEnum | string): OsExtraSpecs {
        this['baremetal:extBootType'] = baremetalExtBootType;
        return this;
    }
    public set baremetalExtBootType(baremetalExtBootType: OsExtraSpecsBaremetalExtBootTypeEnum | string  | undefined) {
        this['baremetal:extBootType'] = baremetalExtBootType;
    }
    public get baremetalExtBootType(): OsExtraSpecsBaremetalExtBootTypeEnum | string | undefined {
        return this['baremetal:extBootType'];
    }
    public withCapabilitiesBoardType(capabilitiesBoardType: string): OsExtraSpecs {
        this['capabilities:board_type'] = capabilitiesBoardType;
        return this;
    }
    public set capabilitiesBoardType(capabilitiesBoardType: string  | undefined) {
        this['capabilities:board_type'] = capabilitiesBoardType;
    }
    public get capabilitiesBoardType(): string | undefined {
        return this['capabilities:board_type'];
    }
    public withBaremetalNetNum(baremetalNetNum: string): OsExtraSpecs {
        this['baremetal:net_num'] = baremetalNetNum;
        return this;
    }
    public set baremetalNetNum(baremetalNetNum: string  | undefined) {
        this['baremetal:net_num'] = baremetalNetNum;
    }
    public get baremetalNetNum(): string | undefined {
        return this['baremetal:net_num'];
    }
    public withBaremetalNetcardDetail(baremetalNetcardDetail: string): OsExtraSpecs {
        this['baremetal:netcard_detail'] = baremetalNetcardDetail;
        return this;
    }
    public set baremetalNetcardDetail(baremetalNetcardDetail: string  | undefined) {
        this['baremetal:netcard_detail'] = baremetalNetcardDetail;
    }
    public get baremetalNetcardDetail(): string | undefined {
        return this['baremetal:netcard_detail'];
    }
    public withBaremetalCpuDetail(baremetalCpuDetail: string): OsExtraSpecs {
        this['baremetal:cpu_detail'] = baremetalCpuDetail;
        return this;
    }
    public set baremetalCpuDetail(baremetalCpuDetail: string  | undefined) {
        this['baremetal:cpu_detail'] = baremetalCpuDetail;
    }
    public get baremetalCpuDetail(): string | undefined {
        return this['baremetal:cpu_detail'];
    }
    public withBaremetalMemoryDetail(baremetalMemoryDetail: string): OsExtraSpecs {
        this['baremetal:memory_detail'] = baremetalMemoryDetail;
        return this;
    }
    public set baremetalMemoryDetail(baremetalMemoryDetail: string  | undefined) {
        this['baremetal:memory_detail'] = baremetalMemoryDetail;
    }
    public get baremetalMemoryDetail(): string | undefined {
        return this['baremetal:memory_detail'];
    }
    public withCondOperationStatus(condOperationStatus: OsExtraSpecsCondOperationStatusEnum | string): OsExtraSpecs {
        this['cond:operation:status'] = condOperationStatus;
        return this;
    }
    public set condOperationStatus(condOperationStatus: OsExtraSpecsCondOperationStatusEnum | string  | undefined) {
        this['cond:operation:status'] = condOperationStatus;
    }
    public get condOperationStatus(): OsExtraSpecsCondOperationStatusEnum | string | undefined {
        return this['cond:operation:status'];
    }
    public withCondOperationAz(condOperationAz: string): OsExtraSpecs {
        this['cond:operation:az'] = condOperationAz;
        return this;
    }
    public set condOperationAz(condOperationAz: string  | undefined) {
        this['cond:operation:az'] = condOperationAz;
    }
    public get condOperationAz(): string | undefined {
        return this['cond:operation:az'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OsExtraSpecsResourceTypeEnum {
    IRONIC = 'ironic'
}
/**
    * @export
    * @enum {string}
    */
export enum OsExtraSpecsCapabilitiesCpuArchEnum {
    X86_64 = 'x86_64',
    AARCH64 = 'aarch64'
}
/**
    * @export
    * @enum {string}
    */
export enum OsExtraSpecsBaremetalExtBootTypeEnum {
    LOCALDISK = 'LocalDisk',
    VOLUME = 'Volume'
}
/**
    * @export
    * @enum {string}
    */
export enum OsExtraSpecsCondOperationStatusEnum {
    NORMAL = 'normal',
    ABANDON = 'abandon',
    SELLOUT = 'sellout',
    OBT = 'obt',
    PROMOTION = 'promotion'
}
