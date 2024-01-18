

export class ResponseEip {
    public id?: string;
    private 'ip_version'?: number;
    private 'ip_billing_info'?: string;
    public type?: string;
    private 'ip_address'?: string;
    private 'charge_mode'?: ResponseEipChargeModeEnum | string;
    private 'bandwidth_id'?: string;
    private 'bandwidth_size'?: number;
    private 'bandwidth_name'?: string;
    private 'bandwidth_billing_info'?: string;
    public constructor() { 
    }
    public withId(id: string): ResponseEip {
        this['id'] = id;
        return this;
    }
    public withIpVersion(ipVersion: number): ResponseEip {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withIpBillingInfo(ipBillingInfo: string): ResponseEip {
        this['ip_billing_info'] = ipBillingInfo;
        return this;
    }
    public set ipBillingInfo(ipBillingInfo: string  | undefined) {
        this['ip_billing_info'] = ipBillingInfo;
    }
    public get ipBillingInfo(): string | undefined {
        return this['ip_billing_info'];
    }
    public withType(type: string): ResponseEip {
        this['type'] = type;
        return this;
    }
    public withIpAddress(ipAddress: string): ResponseEip {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withChargeMode(chargeMode: ResponseEipChargeModeEnum | string): ResponseEip {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ResponseEipChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ResponseEipChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withBandwidthId(bandwidthId: string): ResponseEip {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBandwidthSize(bandwidthSize: number): ResponseEip {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withBandwidthName(bandwidthName: string): ResponseEip {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
    public withBandwidthBillingInfo(bandwidthBillingInfo: string): ResponseEip {
        this['bandwidth_billing_info'] = bandwidthBillingInfo;
        return this;
    }
    public set bandwidthBillingInfo(bandwidthBillingInfo: string  | undefined) {
        this['bandwidth_billing_info'] = bandwidthBillingInfo;
    }
    public get bandwidthBillingInfo(): string | undefined {
        return this['bandwidth_billing_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResponseEipChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic',
    E_95PEAK_PLUS = '95peak_plus'
}
