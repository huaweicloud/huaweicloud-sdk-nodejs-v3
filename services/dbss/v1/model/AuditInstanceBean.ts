

export class AuditInstanceBean {
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
    private 'supported_feature'?: Array<string>;
    public constructor() { 
    }
    public withChargeModel(chargeModel: string): AuditInstanceBean {
        this['charge_model'] = chargeModel;
        return this;
    }
    public set chargeModel(chargeModel: string  | undefined) {
        this['charge_model'] = chargeModel;
    }
    public get chargeModel(): string | undefined {
        return this['charge_model'];
    }
    public withComment(comment: string): AuditInstanceBean {
        this['comment'] = comment;
        return this;
    }
    public withConfigNum(configNum: number): AuditInstanceBean {
        this['config_num'] = configNum;
        return this;
    }
    public set configNum(configNum: number  | undefined) {
        this['config_num'] = configNum;
    }
    public get configNum(): number | undefined {
        return this['config_num'];
    }
    public withConnectIp(connectIp: string): AuditInstanceBean {
        this['connect_ip'] = connectIp;
        return this;
    }
    public set connectIp(connectIp: string  | undefined) {
        this['connect_ip'] = connectIp;
    }
    public get connectIp(): string | undefined {
        return this['connect_ip'];
    }
    public withConnectIpv6(connectIpv6: string): AuditInstanceBean {
        this['connect_ipv6'] = connectIpv6;
        return this;
    }
    public set connectIpv6(connectIpv6: string  | undefined) {
        this['connect_ipv6'] = connectIpv6;
    }
    public get connectIpv6(): string | undefined {
        return this['connect_ipv6'];
    }
    public withCpu(cpu: number): AuditInstanceBean {
        this['cpu'] = cpu;
        return this;
    }
    public withCreated(created: string): AuditInstanceBean {
        this['created'] = created;
        return this;
    }
    public withDatabaseLimit(databaseLimit: number): AuditInstanceBean {
        this['database_limit'] = databaseLimit;
        return this;
    }
    public set databaseLimit(databaseLimit: number  | undefined) {
        this['database_limit'] = databaseLimit;
    }
    public get databaseLimit(): number | undefined {
        return this['database_limit'];
    }
    public withEffect(effect: number): AuditInstanceBean {
        this['effect'] = effect;
        return this;
    }
    public withExpired(expired: string): AuditInstanceBean {
        this['expired'] = expired;
        return this;
    }
    public withId(id: string): AuditInstanceBean {
        this['id'] = id;
        return this;
    }
    public withKeepDays(keepDays: string): AuditInstanceBean {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: string  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): string | undefined {
        return this['keep_days'];
    }
    public withName(name: string): AuditInstanceBean {
        this['name'] = name;
        return this;
    }
    public withNewVersion(newVersion: string): AuditInstanceBean {
        this['new_version'] = newVersion;
        return this;
    }
    public set newVersion(newVersion: string  | undefined) {
        this['new_version'] = newVersion;
    }
    public get newVersion(): string | undefined {
        return this['new_version'];
    }
    public withPortId(portId: string): AuditInstanceBean {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withRam(ram: number): AuditInstanceBean {
        this['ram'] = ram;
        return this;
    }
    public withRegion(region: string): AuditInstanceBean {
        this['region'] = region;
        return this;
    }
    public withRemainDays(remainDays: string): AuditInstanceBean {
        this['remain_days'] = remainDays;
        return this;
    }
    public set remainDays(remainDays: string  | undefined) {
        this['remain_days'] = remainDays;
    }
    public get remainDays(): string | undefined {
        return this['remain_days'];
    }
    public withResourceId(resourceId: string): AuditInstanceBean {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): AuditInstanceBean {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withScene(scene: string): AuditInstanceBean {
        this['scene'] = scene;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): AuditInstanceBean {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSpecification(specification: string): AuditInstanceBean {
        this['specification'] = specification;
        return this;
    }
    public withStatus(status: string): AuditInstanceBean {
        this['status'] = status;
        return this;
    }
    public withSubnetId(subnetId: string): AuditInstanceBean {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withTask(task: string): AuditInstanceBean {
        this['task'] = task;
        return this;
    }
    public withVersion(version: string): AuditInstanceBean {
        this['version'] = version;
        return this;
    }
    public withVpcId(vpcId: string): AuditInstanceBean {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withZone(zone: string): AuditInstanceBean {
        this['zone'] = zone;
        return this;
    }
    public withSupportedFeature(supportedFeature: Array<string>): AuditInstanceBean {
        this['supported_feature'] = supportedFeature;
        return this;
    }
    public set supportedFeature(supportedFeature: Array<string>  | undefined) {
        this['supported_feature'] = supportedFeature;
    }
    public get supportedFeature(): Array<string> | undefined {
        return this['supported_feature'];
    }
}