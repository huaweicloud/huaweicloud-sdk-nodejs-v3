

export class ResponseAuditV2 {
    private 'binding_db_type'?: string;
    private 'charge_model'?: string;
    public comment?: string;
    private 'config_num'?: number;
    public connectIpv6?: string;
    private 'connect_ip'?: string;
    public cpu?: number;
    public created?: string;
    private 'database_limit'?: number;
    public effect?: number;
    private 'enterprise_project_id'?: string;
    public expired?: string;
    private 'failed_reason'?: string;
    private 'instance_id'?: string;
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
    private 'supported_feature'?: Array<string>;
    public task?: string;
    public timezone?: string;
    private 'upgrade_log'?: string;
    public version?: string;
    private 'vpc_id'?: string;
    public zone?: string;
    public constructor(chargeModel?: string, comment?: string, configNum?: number, connectIp?: string, cpu?: number, created?: string, databaseLimit?: number, effect?: number, expired?: string, keepDays?: string, name?: string, newVersion?: string, portId?: string, ram?: number, region?: string, remainDays?: string, resourceId?: string, resourceSpecCode?: string, scene?: string, securityGroupId?: string, specification?: string, status?: string, subnetId?: string, task?: string, version?: string, vpcId?: string, zone?: string) { 
        this['charge_model'] = chargeModel;
        this['comment'] = comment;
        this['config_num'] = configNum;
        this['connect_ip'] = connectIp;
        this['cpu'] = cpu;
        this['created'] = created;
        this['database_limit'] = databaseLimit;
        this['effect'] = effect;
        this['expired'] = expired;
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
    public withBindingDbType(bindingDbType: string): ResponseAuditV2 {
        this['binding_db_type'] = bindingDbType;
        return this;
    }
    public set bindingDbType(bindingDbType: string  | undefined) {
        this['binding_db_type'] = bindingDbType;
    }
    public get bindingDbType(): string | undefined {
        return this['binding_db_type'];
    }
    public withChargeModel(chargeModel: string): ResponseAuditV2 {
        this['charge_model'] = chargeModel;
        return this;
    }
    public set chargeModel(chargeModel: string  | undefined) {
        this['charge_model'] = chargeModel;
    }
    public get chargeModel(): string | undefined {
        return this['charge_model'];
    }
    public withComment(comment: string): ResponseAuditV2 {
        this['comment'] = comment;
        return this;
    }
    public withConfigNum(configNum: number): ResponseAuditV2 {
        this['config_num'] = configNum;
        return this;
    }
    public set configNum(configNum: number  | undefined) {
        this['config_num'] = configNum;
    }
    public get configNum(): number | undefined {
        return this['config_num'];
    }
    public withConnectIpv6(connectIpv6: string): ResponseAuditV2 {
        this['connectIpv6'] = connectIpv6;
        return this;
    }
    public withConnectIp(connectIp: string): ResponseAuditV2 {
        this['connect_ip'] = connectIp;
        return this;
    }
    public set connectIp(connectIp: string  | undefined) {
        this['connect_ip'] = connectIp;
    }
    public get connectIp(): string | undefined {
        return this['connect_ip'];
    }
    public withCpu(cpu: number): ResponseAuditV2 {
        this['cpu'] = cpu;
        return this;
    }
    public withCreated(created: string): ResponseAuditV2 {
        this['created'] = created;
        return this;
    }
    public withDatabaseLimit(databaseLimit: number): ResponseAuditV2 {
        this['database_limit'] = databaseLimit;
        return this;
    }
    public set databaseLimit(databaseLimit: number  | undefined) {
        this['database_limit'] = databaseLimit;
    }
    public get databaseLimit(): number | undefined {
        return this['database_limit'];
    }
    public withEffect(effect: number): ResponseAuditV2 {
        this['effect'] = effect;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ResponseAuditV2 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExpired(expired: string): ResponseAuditV2 {
        this['expired'] = expired;
        return this;
    }
    public withFailedReason(failedReason: string): ResponseAuditV2 {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withInstanceId(instanceId: string): ResponseAuditV2 {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withKeepDays(keepDays: string): ResponseAuditV2 {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: string  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): string | undefined {
        return this['keep_days'];
    }
    public withName(name: string): ResponseAuditV2 {
        this['name'] = name;
        return this;
    }
    public withNewVersion(newVersion: string): ResponseAuditV2 {
        this['new_version'] = newVersion;
        return this;
    }
    public set newVersion(newVersion: string  | undefined) {
        this['new_version'] = newVersion;
    }
    public get newVersion(): string | undefined {
        return this['new_version'];
    }
    public withPortId(portId: string): ResponseAuditV2 {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withRam(ram: number): ResponseAuditV2 {
        this['ram'] = ram;
        return this;
    }
    public withRegion(region: string): ResponseAuditV2 {
        this['region'] = region;
        return this;
    }
    public withRemainDays(remainDays: string): ResponseAuditV2 {
        this['remain_days'] = remainDays;
        return this;
    }
    public set remainDays(remainDays: string  | undefined) {
        this['remain_days'] = remainDays;
    }
    public get remainDays(): string | undefined {
        return this['remain_days'];
    }
    public withResourceId(resourceId: string): ResponseAuditV2 {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ResponseAuditV2 {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withScene(scene: string): ResponseAuditV2 {
        this['scene'] = scene;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): ResponseAuditV2 {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSpecification(specification: string): ResponseAuditV2 {
        this['specification'] = specification;
        return this;
    }
    public withStatus(status: string): ResponseAuditV2 {
        this['status'] = status;
        return this;
    }
    public withSubnetId(subnetId: string): ResponseAuditV2 {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSupportedFeature(supportedFeature: Array<string>): ResponseAuditV2 {
        this['supported_feature'] = supportedFeature;
        return this;
    }
    public set supportedFeature(supportedFeature: Array<string>  | undefined) {
        this['supported_feature'] = supportedFeature;
    }
    public get supportedFeature(): Array<string> | undefined {
        return this['supported_feature'];
    }
    public withTask(task: string): ResponseAuditV2 {
        this['task'] = task;
        return this;
    }
    public withTimezone(timezone: string): ResponseAuditV2 {
        this['timezone'] = timezone;
        return this;
    }
    public withUpgradeLog(upgradeLog: string): ResponseAuditV2 {
        this['upgrade_log'] = upgradeLog;
        return this;
    }
    public set upgradeLog(upgradeLog: string  | undefined) {
        this['upgrade_log'] = upgradeLog;
    }
    public get upgradeLog(): string | undefined {
        return this['upgrade_log'];
    }
    public withVersion(version: string): ResponseAuditV2 {
        this['version'] = version;
        return this;
    }
    public withVpcId(vpcId: string): ResponseAuditV2 {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withZone(zone: string): ResponseAuditV2 {
        this['zone'] = zone;
        return this;
    }
}