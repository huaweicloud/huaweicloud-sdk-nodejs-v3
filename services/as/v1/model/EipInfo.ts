import { BandwidthInfo } from './BandwidthInfo';


export class EipInfo {
    private 'ip_type'?: EipInfoIpTypeEnum | string;
    public bandwidth?: BandwidthInfo;
    public constructor(ipType?: string, bandwidth?: BandwidthInfo) { 
        this['ip_type'] = ipType;
        this['bandwidth'] = bandwidth;
    }
    public withIpType(ipType: EipInfoIpTypeEnum | string): EipInfo {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: EipInfoIpTypeEnum | string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): EipInfoIpTypeEnum | string | undefined {
        return this['ip_type'];
    }
    public withBandwidth(bandwidth: BandwidthInfo): EipInfo {
        this['bandwidth'] = bandwidth;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EipInfoIpTypeEnum {
    E_5_BGP = '5_bgp',
    E_5_SBGP = '5_sbgp',
    E_5_TELCOM = '5_telcom',
    E_5_UNION = '5_union'
}
