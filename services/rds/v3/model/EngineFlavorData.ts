

export class EngineFlavorData {
    public vcpus?: string;
    public ram?: string;
    private 'spec_code'?: string;
    private 'is_ipv6_supported'?: boolean;
    private 'type_code'?: string;
    private 'az_status'?: { [key: string]: string; };
    private 'group_type'?: string;
    private 'max_connection'?: string;
    public tps?: string;
    public qps?: string;
    private 'min_volume_size'?: string;
    private 'max_volume_size'?: string;
    public constructor() { 
    }
    public withVcpus(vcpus: string): EngineFlavorData {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): EngineFlavorData {
        this['ram'] = ram;
        return this;
    }
    public withSpecCode(specCode: string): EngineFlavorData {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withIsIpv6Supported(isIpv6Supported: boolean): EngineFlavorData {
        this['is_ipv6_supported'] = isIpv6Supported;
        return this;
    }
    public set isIpv6Supported(isIpv6Supported: boolean  | undefined) {
        this['is_ipv6_supported'] = isIpv6Supported;
    }
    public get isIpv6Supported(): boolean | undefined {
        return this['is_ipv6_supported'];
    }
    public withTypeCode(typeCode: string): EngineFlavorData {
        this['type_code'] = typeCode;
        return this;
    }
    public set typeCode(typeCode: string  | undefined) {
        this['type_code'] = typeCode;
    }
    public get typeCode(): string | undefined {
        return this['type_code'];
    }
    public withAzStatus(azStatus: { [key: string]: string; }): EngineFlavorData {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
    public withGroupType(groupType: string): EngineFlavorData {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withMaxConnection(maxConnection: string): EngineFlavorData {
        this['max_connection'] = maxConnection;
        return this;
    }
    public set maxConnection(maxConnection: string  | undefined) {
        this['max_connection'] = maxConnection;
    }
    public get maxConnection(): string | undefined {
        return this['max_connection'];
    }
    public withTps(tps: string): EngineFlavorData {
        this['tps'] = tps;
        return this;
    }
    public withQps(qps: string): EngineFlavorData {
        this['qps'] = qps;
        return this;
    }
    public withMinVolumeSize(minVolumeSize: string): EngineFlavorData {
        this['min_volume_size'] = minVolumeSize;
        return this;
    }
    public set minVolumeSize(minVolumeSize: string  | undefined) {
        this['min_volume_size'] = minVolumeSize;
    }
    public get minVolumeSize(): string | undefined {
        return this['min_volume_size'];
    }
    public withMaxVolumeSize(maxVolumeSize: string): EngineFlavorData {
        this['max_volume_size'] = maxVolumeSize;
        return this;
    }
    public set maxVolumeSize(maxVolumeSize: string  | undefined) {
        this['max_volume_size'] = maxVolumeSize;
    }
    public get maxVolumeSize(): string | undefined {
        return this['max_volume_size'];
    }
}