

export class ApplyInternetReq {
    private 'nat_spec'?: string;
    private 'eip_charge_mode'?: string;
    private 'bandwidth_size'?: number;
    private 'eip_type'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'nat_id'?: string;
    private 'nat_name'?: string;
    private 'eip_name'?: string;
    public constructor(natSpec?: string, eipChargeMode?: string, bandwidthSize?: number, vpcId?: string, subnetId?: string) { 
        this['nat_spec'] = natSpec;
        this['eip_charge_mode'] = eipChargeMode;
        this['bandwidth_size'] = bandwidthSize;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withNatSpec(natSpec: string): ApplyInternetReq {
        this['nat_spec'] = natSpec;
        return this;
    }
    public set natSpec(natSpec: string  | undefined) {
        this['nat_spec'] = natSpec;
    }
    public get natSpec(): string | undefined {
        return this['nat_spec'];
    }
    public withEipChargeMode(eipChargeMode: string): ApplyInternetReq {
        this['eip_charge_mode'] = eipChargeMode;
        return this;
    }
    public set eipChargeMode(eipChargeMode: string  | undefined) {
        this['eip_charge_mode'] = eipChargeMode;
    }
    public get eipChargeMode(): string | undefined {
        return this['eip_charge_mode'];
    }
    public withBandwidthSize(bandwidthSize: number): ApplyInternetReq {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withEipType(eipType: string): ApplyInternetReq {
        this['eip_type'] = eipType;
        return this;
    }
    public set eipType(eipType: string  | undefined) {
        this['eip_type'] = eipType;
    }
    public get eipType(): string | undefined {
        return this['eip_type'];
    }
    public withVpcId(vpcId: string): ApplyInternetReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ApplyInternetReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ApplyInternetReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withNatId(natId: string): ApplyInternetReq {
        this['nat_id'] = natId;
        return this;
    }
    public set natId(natId: string  | undefined) {
        this['nat_id'] = natId;
    }
    public get natId(): string | undefined {
        return this['nat_id'];
    }
    public withNatName(natName: string): ApplyInternetReq {
        this['nat_name'] = natName;
        return this;
    }
    public set natName(natName: string  | undefined) {
        this['nat_name'] = natName;
    }
    public get natName(): string | undefined {
        return this['nat_name'];
    }
    public withEipName(eipName: string): ApplyInternetReq {
        this['eip_name'] = eipName;
        return this;
    }
    public set eipName(eipName: string  | undefined) {
        this['eip_name'] = eipName;
    }
    public get eipName(): string | undefined {
        return this['eip_name'];
    }
}