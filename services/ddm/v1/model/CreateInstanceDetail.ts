

export class CreateInstanceDetail {
    public name?: string;
    private 'flavor_id'?: string;
    private 'node_num'?: number;
    private 'engine_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'available_zones'?: Array<string>;
    private 'vpc_id'?: string;
    private 'security_group_id'?: string;
    private 'subnet_id'?: string;
    private 'param_group_id'?: string;
    private 'time_zone'?: string;
    private 'admin_user_name'?: string;
    private 'admin_user_password'?: string;
    public constructor(name?: string, flavorId?: string, nodeNum?: number, engineId?: string, availableZones?: Array<string>, vpcId?: string, securityGroupId?: string, subnetId?: string) { 
        this['name'] = name;
        this['flavor_id'] = flavorId;
        this['node_num'] = nodeNum;
        this['engine_id'] = engineId;
        this['available_zones'] = availableZones;
        this['vpc_id'] = vpcId;
        this['security_group_id'] = securityGroupId;
        this['subnet_id'] = subnetId;
    }
    public withName(name: string): CreateInstanceDetail {
        this['name'] = name;
        return this;
    }
    public withFlavorId(flavorId: string): CreateInstanceDetail {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withNodeNum(nodeNum: number): CreateInstanceDetail {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withEngineId(engineId: string): CreateInstanceDetail {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAvailableZones(availableZones: Array<string>): CreateInstanceDetail {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withVpcId(vpcId: string): CreateInstanceDetail {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceDetail {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceDetail {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withParamGroupId(paramGroupId: string): CreateInstanceDetail {
        this['param_group_id'] = paramGroupId;
        return this;
    }
    public set paramGroupId(paramGroupId: string  | undefined) {
        this['param_group_id'] = paramGroupId;
    }
    public get paramGroupId(): string | undefined {
        return this['param_group_id'];
    }
    public withTimeZone(timeZone: string): CreateInstanceDetail {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withAdminUserName(adminUserName: string): CreateInstanceDetail {
        this['admin_user_name'] = adminUserName;
        return this;
    }
    public set adminUserName(adminUserName: string  | undefined) {
        this['admin_user_name'] = adminUserName;
    }
    public get adminUserName(): string | undefined {
        return this['admin_user_name'];
    }
    public withAdminUserPassword(adminUserPassword: string): CreateInstanceDetail {
        this['admin_user_password'] = adminUserPassword;
        return this;
    }
    public set adminUserPassword(adminUserPassword: string  | undefined) {
        this['admin_user_password'] = adminUserPassword;
    }
    public get adminUserPassword(): string | undefined {
        return this['admin_user_password'];
    }
}