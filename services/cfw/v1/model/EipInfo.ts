

export class EipInfo {
    private 'eip_id'?: string;
    private 'fw_instance_id'?: string;
    private 'object_id'?: string;
    private 'public_ip'?: string;
    private 'public_ipv6'?: string;
    public type?: number;
    public constructor() { 
    }
    public withEipId(eipId: string): EipInfo {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
    public withFwInstanceId(fwInstanceId: string): EipInfo {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withObjectId(objectId: string): EipInfo {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withPublicIp(publicIp: string): EipInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPublicIpv6(publicIpv6: string): EipInfo {
        this['public_ipv6'] = publicIpv6;
        return this;
    }
    public set publicIpv6(publicIpv6: string  | undefined) {
        this['public_ipv6'] = publicIpv6;
    }
    public get publicIpv6(): string | undefined {
        return this['public_ipv6'];
    }
    public withType(type: number): EipInfo {
        this['type'] = type;
        return this;
    }
}