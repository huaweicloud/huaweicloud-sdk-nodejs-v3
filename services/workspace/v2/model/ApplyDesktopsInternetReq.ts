

export class ApplyDesktopsInternetReq {
    private 'desktop_ids'?: Array<string>;
    private 'inst_info_ids'?: Array<string>;
    private 'eip_type'?: string;
    private 'eip_charge_mode'?: ApplyDesktopsInternetReqEipChargeModeEnum | string;
    private 'bandwidth_size'?: number;
    private 'order_id'?: string;
    private 'enterprise_project_id'?: string;
    public count?: number;
    public constructor(eipType?: string, eipChargeMode?: string, bandwidthSize?: number) { 
        this['eip_type'] = eipType;
        this['eip_charge_mode'] = eipChargeMode;
        this['bandwidth_size'] = bandwidthSize;
    }
    public withDesktopIds(desktopIds: Array<string>): ApplyDesktopsInternetReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withInstInfoIds(instInfoIds: Array<string>): ApplyDesktopsInternetReq {
        this['inst_info_ids'] = instInfoIds;
        return this;
    }
    public set instInfoIds(instInfoIds: Array<string>  | undefined) {
        this['inst_info_ids'] = instInfoIds;
    }
    public get instInfoIds(): Array<string> | undefined {
        return this['inst_info_ids'];
    }
    public withEipType(eipType: string): ApplyDesktopsInternetReq {
        this['eip_type'] = eipType;
        return this;
    }
    public set eipType(eipType: string  | undefined) {
        this['eip_type'] = eipType;
    }
    public get eipType(): string | undefined {
        return this['eip_type'];
    }
    public withEipChargeMode(eipChargeMode: ApplyDesktopsInternetReqEipChargeModeEnum | string): ApplyDesktopsInternetReq {
        this['eip_charge_mode'] = eipChargeMode;
        return this;
    }
    public set eipChargeMode(eipChargeMode: ApplyDesktopsInternetReqEipChargeModeEnum | string  | undefined) {
        this['eip_charge_mode'] = eipChargeMode;
    }
    public get eipChargeMode(): ApplyDesktopsInternetReqEipChargeModeEnum | string | undefined {
        return this['eip_charge_mode'];
    }
    public withBandwidthSize(bandwidthSize: number): ApplyDesktopsInternetReq {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withOrderId(orderId: string): ApplyDesktopsInternetReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ApplyDesktopsInternetReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCount(count: number): ApplyDesktopsInternetReq {
        this['count'] = count;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplyDesktopsInternetReqEipChargeModeEnum {
    TRAFFIC = 'TRAFFIC',
    BANDWIDTH = 'BANDWIDTH'
}
