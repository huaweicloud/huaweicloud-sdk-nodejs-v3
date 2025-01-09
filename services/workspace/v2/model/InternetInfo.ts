

export class InternetInfo {
    private 'vpc_name'?: string;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    private 'nat_id'?: string;
    private 'nat_name'?: string;
    public eip?: string;
    private 'created_at'?: string;
    public status?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withVpcName(vpcName: string): InternetInfo {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withSubnetId(subnetId: string): InternetInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): InternetInfo {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withNatId(natId: string): InternetInfo {
        this['nat_id'] = natId;
        return this;
    }
    public set natId(natId: string  | undefined) {
        this['nat_id'] = natId;
    }
    public get natId(): string | undefined {
        return this['nat_id'];
    }
    public withNatName(natName: string): InternetInfo {
        this['nat_name'] = natName;
        return this;
    }
    public set natName(natName: string  | undefined) {
        this['nat_name'] = natName;
    }
    public get natName(): string | undefined {
        return this['nat_name'];
    }
    public withEip(eip: string): InternetInfo {
        this['eip'] = eip;
        return this;
    }
    public withCreatedAt(createdAt: string): InternetInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withStatus(status: string): InternetInfo {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InternetInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}