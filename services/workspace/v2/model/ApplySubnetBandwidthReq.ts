

export class ApplySubnetBandwidthReq {
    private 'bandwidth_name'?: string;
    private 'subnet_id'?: string;
    private 'charge_mode'?: string;
    private 'bandwidth_size'?: number;
    private 'enterprise_project_id'?: string;
    private 'order_id'?: string;
    public constructor(subnetId?: string, chargeMode?: string) { 
        this['subnet_id'] = subnetId;
        this['charge_mode'] = chargeMode;
    }
    public withBandwidthName(bandwidthName: string): ApplySubnetBandwidthReq {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
    public withSubnetId(subnetId: string): ApplySubnetBandwidthReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withChargeMode(chargeMode: string): ApplySubnetBandwidthReq {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withBandwidthSize(bandwidthSize: number): ApplySubnetBandwidthReq {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ApplySubnetBandwidthReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOrderId(orderId: string): ApplySubnetBandwidthReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}