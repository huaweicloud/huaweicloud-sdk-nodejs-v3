

export class CreateDdmInstanceReq {
    public name?: string;
    private 'available_zones'?: Array<string>;
    private 'node_num'?: number;
    private 'engine_version'?: string;
    private 'flavor_ref'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'param_group_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'time_zone'?: string;
    private 'admin_user_name'?: string;
    private 'admin_user_password'?: string;
    private 'charge_info'?: object;
    public constructor() { 
    }
    public withName(name: string): CreateDdmInstanceReq {
        this['name'] = name;
        return this;
    }
    public withAvailableZones(availableZones: Array<string>): CreateDdmInstanceReq {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withNodeNum(nodeNum: number): CreateDdmInstanceReq {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withEngineVersion(engineVersion: string): CreateDdmInstanceReq {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withFlavorRef(flavorRef: string): CreateDdmInstanceReq {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withVpcId(vpcId: string): CreateDdmInstanceReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateDdmInstanceReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateDdmInstanceReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withParamGroupId(paramGroupId: string): CreateDdmInstanceReq {
        this['param_group_id'] = paramGroupId;
        return this;
    }
    public set paramGroupId(paramGroupId: string  | undefined) {
        this['param_group_id'] = paramGroupId;
    }
    public get paramGroupId(): string | undefined {
        return this['param_group_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDdmInstanceReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTimeZone(timeZone: string): CreateDdmInstanceReq {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withAdminUserName(adminUserName: string): CreateDdmInstanceReq {
        this['admin_user_name'] = adminUserName;
        return this;
    }
    public set adminUserName(adminUserName: string  | undefined) {
        this['admin_user_name'] = adminUserName;
    }
    public get adminUserName(): string | undefined {
        return this['admin_user_name'];
    }
    public withAdminUserPassword(adminUserPassword: string): CreateDdmInstanceReq {
        this['admin_user_password'] = adminUserPassword;
        return this;
    }
    public set adminUserPassword(adminUserPassword: string  | undefined) {
        this['admin_user_password'] = adminUserPassword;
    }
    public get adminUserPassword(): string | undefined {
        return this['admin_user_password'];
    }
    public withChargeInfo(chargeInfo: object): CreateDdmInstanceReq {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: object  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): object | undefined {
        return this['charge_info'];
    }
}