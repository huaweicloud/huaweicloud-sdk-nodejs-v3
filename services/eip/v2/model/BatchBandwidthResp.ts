import { PublicipInfoResp } from './PublicipInfoResp';


export class BatchBandwidthResp {
    private 'bandwidth_type'?: string | undefined;
    private 'billing_info'?: string | undefined;
    private 'charge_mode'?: BatchBandwidthRespChargeModeEnum | undefined;
    public id?: string;
    public name?: string;
    private 'publicip_info'?: Array<PublicipInfoResp> | undefined;
    private 'share_type'?: BatchBandwidthRespShareTypeEnum | undefined;
    public size?: number;
    private 'tenant_id'?: string | undefined;
    public status?: BatchBandwidthRespStatusEnum;
    public constructor() { 
    }
    public withBandwidthType(bandwidthType: string): BatchBandwidthResp {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType() {
        return this['bandwidth_type'];
    }
    public withBillingInfo(billingInfo: string): BatchBandwidthResp {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo() {
        return this['billing_info'];
    }
    public withChargeMode(chargeMode: BatchBandwidthRespChargeModeEnum): BatchBandwidthResp {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: BatchBandwidthRespChargeModeEnum | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withId(id: string): BatchBandwidthResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BatchBandwidthResp {
        this['name'] = name;
        return this;
    }
    public withPublicipInfo(publicipInfo: Array<PublicipInfoResp>): BatchBandwidthResp {
        this['publicip_info'] = publicipInfo;
        return this;
    }
    public set publicipInfo(publicipInfo: Array<PublicipInfoResp> | undefined) {
        this['publicip_info'] = publicipInfo;
    }
    public get publicipInfo() {
        return this['publicip_info'];
    }
    public withShareType(shareType: BatchBandwidthRespShareTypeEnum): BatchBandwidthResp {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: BatchBandwidthRespShareTypeEnum | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType() {
        return this['share_type'];
    }
    public withSize(size: number): BatchBandwidthResp {
        this['size'] = size;
        return this;
    }
    public withTenantId(tenantId: string): BatchBandwidthResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withStatus(status: BatchBandwidthRespStatusEnum): BatchBandwidthResp {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchBandwidthRespChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic',
    E_95PEAK_PLUS = '95peak_plus'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchBandwidthRespShareTypeEnum {
    WHOLE = 'WHOLE',
    PER = 'PER'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchBandwidthRespStatusEnum {
    FREEZED = 'FREEZED',
    NORMAL = 'NORMAL'
}
