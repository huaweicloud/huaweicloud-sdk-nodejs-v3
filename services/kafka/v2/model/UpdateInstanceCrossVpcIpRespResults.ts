

export class UpdateInstanceCrossVpcIpRespResults {
    private 'advertised_ip'?: string | undefined;
    public success?: boolean;
    public ip?: string;
    public constructor() { 
    }
    public withAdvertisedIp(advertisedIp: string): UpdateInstanceCrossVpcIpRespResults {
        this['advertised_ip'] = advertisedIp;
        return this;
    }
    public set advertisedIp(advertisedIp: string | undefined) {
        this['advertised_ip'] = advertisedIp;
    }
    public get advertisedIp() {
        return this['advertised_ip'];
    }
    public withSuccess(success: boolean): UpdateInstanceCrossVpcIpRespResults {
        this['success'] = success;
        return this;
    }
    public withIp(ip: string): UpdateInstanceCrossVpcIpRespResults {
        this['ip'] = ip;
        return this;
    }
}