import { Tags } from './Tags';


export class CustomerInstanceVO {
    public id?: string;
    public status?: string;
    public name?: string;
    public updated?: string;
    public description?: string;
    private 'available_zone'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'node_count'?: number;
    private 'access_ip'?: string;
    private 'access_port'?: string;
    private 'core_count'?: string;
    private 'ram_capacity'?: string;
    private 'error_msg'?: string;
    private 'node_status'?: string;
    private 'maintenance_time'?: string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    private 'engine_version'?: string;
    private 'order_id'?: string;
    private 'admin_user_name'?: string;
    private 'enable_ssl'?: boolean;
    private 'flavor_ref'?: string;
    public tags?: Array<Tags>;
    public constructor() { 
    }
    public withId(id: string): CustomerInstanceVO {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): CustomerInstanceVO {
        this['status'] = status;
        return this;
    }
    public withName(name: string): CustomerInstanceVO {
        this['name'] = name;
        return this;
    }
    public withUpdated(updated: string): CustomerInstanceVO {
        this['updated'] = updated;
        return this;
    }
    public withDescription(description: string): CustomerInstanceVO {
        this['description'] = description;
        return this;
    }
    public withAvailableZone(availableZone: string): CustomerInstanceVO {
        this['available_zone'] = availableZone;
        return this;
    }
    public set availableZone(availableZone: string  | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone(): string | undefined {
        return this['available_zone'];
    }
    public withVpcId(vpcId: string): CustomerInstanceVO {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CustomerInstanceVO {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CustomerInstanceVO {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withNodeCount(nodeCount: number): CustomerInstanceVO {
        this['node_count'] = nodeCount;
        return this;
    }
    public set nodeCount(nodeCount: number  | undefined) {
        this['node_count'] = nodeCount;
    }
    public get nodeCount(): number | undefined {
        return this['node_count'];
    }
    public withAccessIp(accessIp: string): CustomerInstanceVO {
        this['access_ip'] = accessIp;
        return this;
    }
    public set accessIp(accessIp: string  | undefined) {
        this['access_ip'] = accessIp;
    }
    public get accessIp(): string | undefined {
        return this['access_ip'];
    }
    public withAccessPort(accessPort: string): CustomerInstanceVO {
        this['access_port'] = accessPort;
        return this;
    }
    public set accessPort(accessPort: string  | undefined) {
        this['access_port'] = accessPort;
    }
    public get accessPort(): string | undefined {
        return this['access_port'];
    }
    public withCoreCount(coreCount: string): CustomerInstanceVO {
        this['core_count'] = coreCount;
        return this;
    }
    public set coreCount(coreCount: string  | undefined) {
        this['core_count'] = coreCount;
    }
    public get coreCount(): string | undefined {
        return this['core_count'];
    }
    public withRamCapacity(ramCapacity: string): CustomerInstanceVO {
        this['ram_capacity'] = ramCapacity;
        return this;
    }
    public set ramCapacity(ramCapacity: string  | undefined) {
        this['ram_capacity'] = ramCapacity;
    }
    public get ramCapacity(): string | undefined {
        return this['ram_capacity'];
    }
    public withErrorMsg(errorMsg: string): CustomerInstanceVO {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withNodeStatus(nodeStatus: string): CustomerInstanceVO {
        this['node_status'] = nodeStatus;
        return this;
    }
    public set nodeStatus(nodeStatus: string  | undefined) {
        this['node_status'] = nodeStatus;
    }
    public get nodeStatus(): string | undefined {
        return this['node_status'];
    }
    public withMaintenanceTime(maintenanceTime: string): CustomerInstanceVO {
        this['maintenance_time'] = maintenanceTime;
        return this;
    }
    public set maintenanceTime(maintenanceTime: string  | undefined) {
        this['maintenance_time'] = maintenanceTime;
    }
    public get maintenanceTime(): string | undefined {
        return this['maintenance_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CustomerInstanceVO {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): CustomerInstanceVO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEngineVersion(engineVersion: string): CustomerInstanceVO {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withOrderId(orderId: string): CustomerInstanceVO {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withAdminUserName(adminUserName: string): CustomerInstanceVO {
        this['admin_user_name'] = adminUserName;
        return this;
    }
    public set adminUserName(adminUserName: string  | undefined) {
        this['admin_user_name'] = adminUserName;
    }
    public get adminUserName(): string | undefined {
        return this['admin_user_name'];
    }
    public withEnableSsl(enableSsl: boolean): CustomerInstanceVO {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withFlavorRef(flavorRef: string): CustomerInstanceVO {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withTags(tags: Array<Tags>): CustomerInstanceVO {
        this['tags'] = tags;
        return this;
    }
}