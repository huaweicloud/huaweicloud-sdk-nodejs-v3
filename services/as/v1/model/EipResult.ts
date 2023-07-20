import { BandwidthResult } from './BandwidthResult';


export class EipResult {
    private 'ip_type'?: EipResultIpTypeEnum | string;
    public bandwidth?: BandwidthResult;
    public constructor() { 
    }
    public withIpType(ipType: EipResultIpTypeEnum | string): EipResult {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: EipResultIpTypeEnum | string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): EipResultIpTypeEnum | string | undefined {
        return this['ip_type'];
    }
    public withBandwidth(bandwidth: BandwidthResult): EipResult {
        this['bandwidth'] = bandwidth;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EipResultIpTypeEnum {
    E_5_BGP = '5_bgp',
    E_5_SBGP = '5_sbgp',
    E_5_TELCOM = '5_telcom',
    E_5_UNION = '5_union'
}
