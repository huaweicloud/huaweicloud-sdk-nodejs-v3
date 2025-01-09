

export class SubnetBandwidthDetail {
    private 'bandwidth_id'?: string;
    private 'bandwidth_name'?: string;
    private 'charge_mode'?: string;
    public size?: number;
    private 'vpc_id'?: string;
    private 'vpc_name'?: string;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'created_at'?: string;
    private 'order_id'?: string;
    public status?: string;
    private 'control_mode'?: string;
    public constructor() { 
    }
    public withBandwidthId(bandwidthId: string): SubnetBandwidthDetail {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBandwidthName(bandwidthName: string): SubnetBandwidthDetail {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
    public withChargeMode(chargeMode: string): SubnetBandwidthDetail {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withSize(size: number): SubnetBandwidthDetail {
        this['size'] = size;
        return this;
    }
    public withVpcId(vpcId: string): SubnetBandwidthDetail {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): SubnetBandwidthDetail {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withSubnetId(subnetId: string): SubnetBandwidthDetail {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): SubnetBandwidthDetail {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SubnetBandwidthDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreatedAt(createdAt: string): SubnetBandwidthDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withOrderId(orderId: string): SubnetBandwidthDetail {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withStatus(status: string): SubnetBandwidthDetail {
        this['status'] = status;
        return this;
    }
    public withControlMode(controlMode: string): SubnetBandwidthDetail {
        this['control_mode'] = controlMode;
        return this;
    }
    public set controlMode(controlMode: string  | undefined) {
        this['control_mode'] = controlMode;
    }
    public get controlMode(): string | undefined {
        return this['control_mode'];
    }
}