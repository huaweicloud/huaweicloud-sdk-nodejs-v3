import { RemovePublicipInfo } from './RemovePublicipInfo';


export class RemoveFromSharedBandwidthOption {
    private 'charge_mode': RemoveFromSharedBandwidthOptionChargeModeEnum | undefined;
    private 'publicip_info': Array<RemovePublicipInfo> | undefined;
    public size: number;
    public constructor(chargeMode?: any, publicipInfo?: any, size?: any) { 
        this['charge_mode'] = chargeMode;
        this['publicip_info'] = publicipInfo;
        this['size'] = size;
    }
    public withChargeMode(chargeMode: RemoveFromSharedBandwidthOptionChargeModeEnum): RemoveFromSharedBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: RemoveFromSharedBandwidthOptionChargeModeEnum | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withPublicipInfo(publicipInfo: Array<RemovePublicipInfo>): RemoveFromSharedBandwidthOption {
        this['publicip_info'] = publicipInfo;
        return this;
    }
    public set publicipInfo(publicipInfo: Array<RemovePublicipInfo> | undefined) {
        this['publicip_info'] = publicipInfo;
    }
    public get publicipInfo() {
        return this['publicip_info'];
    }
    public withSize(size: number): RemoveFromSharedBandwidthOption {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RemoveFromSharedBandwidthOptionChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
