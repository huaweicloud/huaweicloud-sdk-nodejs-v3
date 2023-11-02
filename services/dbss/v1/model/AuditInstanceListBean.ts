

export class AuditInstanceListBean {
    private 'charge_model'?: string;
    public comment?: string;
    private 'config_num'?: number;
    private 'connect_ip'?: string;
    private 'connect_ipv6'?: string;
    public cpu?: number;
    public created?: string;
    private 'database_limit'?: number;
    public effect?: number;
    public expired?: string;
    public id?: string;
    private 'keep_days'?: string;
    public name?: string;
    private 'new_version'?: string;
    private 'port_id'?: string;
    public ram?: number;
    public region?: string;
    private 'remain_days'?: string;
    private 'resource_id'?: string;
    private 'resource_spec_code'?: string;
    public scene?: string;
    private 'security_group_id'?: string;
    public specification?: string;
    public status?: string;
    private 'subnet_id'?: string;
    public task?: string;
    public version?: string;
    private 'vpc_id'?: string;
    public zone?: string;
    public constructor(chargeModel?: string, comment?: string, configNum?: number, connectIp?: string, connectIpv6?: string, cpu?: number, created?: string, databaseLimit?: number, effect?: number, expired?: string, id?: string, keepDays?: string, name?: string, newVersion?: string, portId?: string, ram?: number, region?: string, remainDays?: string, resourceId?: string, resourceSpecCode?: string, scene?: string, securityGroupId?: string, specification?: string, status?: string, subnetId?: string, task?: string, version?: string, vpcId?: string, zone?: string) { 
        this['charge_model'] = chargeModel;
        this['comment'] = comment;
        this['config_num'] = configNum;
        this['connect_ip'] = connectIp;
        this['connect_ipv6'] = connectIpv6;
        this['cpu'] = cpu;
        this['created'] = created;
        this['database_limit'] = databaseLimit;
        this['effect'] = effect;
        this['expired'] = expired;
        this['id'] = id;
        this['keep_days'] = keepDays;
        this['name'] = name;
        this['new_version'] = newVersion;
        this['port_id'] = portId;
        this['ram'] = ram;
        this['region'] = region;
        this['remain_days'] = remainDays;
        this['resource_id'] = resourceId;
        this['resource_spec_code'] = resourceSpecCode;
        this['scene'] = scene;
        this['security_group_id'] = securityGroupId;
        this['specification'] = specification;
        this['status'] = status;
        this['subnet_id'] = subnetId;
        this['task'] = task;
        this['version'] = version;
        this['vpc_id'] = vpcId;
        this['zone'] = zone;
    }
    public withChargeModel(chargeModel: string): AuditInstanceListBean {
        this['charge_model'] = chargeModel;
        return this;
    }
    public set chargeModel(chargeModel: string  | undefined) {
        this['charge_model'] = chargeModel;
    }
    public get chargeModel(): string | undefined {
        return this['charge_model'];
    }
    public withComment(comment: string): AuditInstanceListBean {
        this['comment'] = comment;
        return this;
    }
    public withConfigNum(configNum: number): AuditInstanceListBean {
        this['config_num'] = configNum;
        return this;
    }
    public set configNum(configNum: number  | undefined) {
        this['config_num'] = configNum;
    }
    public get configNum(): number | undefined {
        return this['config_num'];
    }
    public withConnectIp(connectIp: string): AuditInstanceListBean {
        this['connect_ip'] = connectIp;
        return this;
    }
    public set connectIp(connectIp: string  | undefined) {
        this['connect_ip'] = connectIp;
    }
    public get connectIp(): string | undefined {
        return this['connect_ip'];
    }
    public withConnectIpv6(connectIpv6: string): AuditInstanceListBean {
        this['connect_ipv6'] = connectIpv6;
        return this;
    }
    public set connectIpv6(connectIpv6: string  | undefined) {
        this['connect_ipv6'] = connectIpv6;
    }
    public get connectIpv6(): string | undefined {
        return this['connect_ipv6'];
    }
    public withCpu(cpu: number): AuditInstanceListBean {
        this['cpu'] = cpu;
        return this;
    }
    public withCreated(created: string): AuditInstanceListBean {
        this['created'] = created;
        return this;
    }
    public withDatabaseLimit(databaseLimit: number): AuditInstanceListBean {
        this['database_limit'] = databaseLimit;
        return this;
    }
    public set databaseLimit(databaseLimit: number  | undefined) {
        this['database_limit'] = databaseLimit;
    }
    public get databaseLimit(): number | undefined {
        return this['database_limit'];
    }
    public withEffect(effect: number): AuditInstanceListBean {
        this['effect'] = effect;
        return this;
    }
    public withExpired(expired: string): AuditInstanceListBean {
        this['expired'] = expired;
        return this;
    }
    public withId(id: string): AuditInstanceListBean {
        this['id'] = id;
        return this;
    }
    public withKeepDays(keepDays: string): AuditInstanceListBean {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: string  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): string | undefined {
        return this['keep_days'];
    }
    public withName(name: string): AuditInstanceListBean {
        this['name'] = name;
        return this;
    }
    public withNewVersion(newVersion: string): AuditInstanceListBean {
        this['new_version'] = newVersion;
        return this;
    }
    public set newVersion(newVersion: string  | undefined) {
        this['new_version'] = newVersion;
    }
    public get newVersion(): string | undefined {
        return this['new_version'];
    }
    public withPortId(portId: string): AuditInstanceListBean {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withRam(ram: number): AuditInstanceListBean {
        this['ram'] = ram;
        return this;
    }
    public withRegion(region: string): AuditInstanceListBean {
        this['region'] = region;
        return this;
    }
    public withRemainDays(remainDays: string): AuditInstanceListBean {
        this['remain_days'] = remainDays;
        return this;
    }
    public set remainDays(remainDays: string  | undefined) {
        this['remain_days'] = remainDays;
    }
    public get remainDays(): string | undefined {
        return this['remain_days'];
    }
    public withResourceId(resourceId: string): AuditInstanceListBean {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): AuditInstanceListBean {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withScene(scene: string): AuditInstanceListBean {
        this['scene'] = scene;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): AuditInstanceListBean {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSpecification(specification: string): AuditInstanceListBean {
        this['specification'] = specification;
        return this;
    }
    public withStatus(status: string): AuditInstanceListBean {
        this['status'] = status;
        return this;
    }
    public withSubnetId(subnetId: string): AuditInstanceListBean {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withTask(task: string): AuditInstanceListBean {
        this['task'] = task;
        return this;
    }
    public withVersion(version: string): AuditInstanceListBean {
        this['version'] = version;
        return this;
    }
    public withVpcId(vpcId: string): AuditInstanceListBean {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withZone(zone: string): AuditInstanceListBean {
        this['zone'] = zone;
        return this;
    }
}