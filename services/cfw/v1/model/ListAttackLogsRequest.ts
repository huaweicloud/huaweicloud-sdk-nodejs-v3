

export class ListAttackLogsRequest {
    private 'project_id': string | undefined;
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'src_ip'?: string | undefined;
    private 'src_port'?: number | undefined;
    private 'dst_ip'?: string | undefined;
    private 'dst_port'?: number | undefined;
    public protocol?: ListAttackLogsRequestProtocolEnum;
    public app?: string;
    private 'log_id'?: string | undefined;
    private 'next_date'?: number | undefined;
    public offset?: number;
    public limit: number;
    private 'fw_instance_id': string | undefined;
    public action?: ListAttackLogsRequestActionEnum;
    public direction?: ListAttackLogsRequestDirectionEnum;
    private 'attack_type'?: string | undefined;
    private 'attack_rule'?: string | undefined;
    public level?: string;
    public source?: string;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(projectId?: any, startTime?: any, endTime?: any, limit?: any, fwInstanceId?: any) { 
        this['project_id'] = projectId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
        this['fw_instance_id'] = fwInstanceId;
    }
    public withProjectId(projectId: string): ListAttackLogsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withStartTime(startTime: number): ListAttackLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListAttackLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withSrcIp(srcIp: string): ListAttackLogsRequest {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp() {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: number): ListAttackLogsRequest {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: number | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort() {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): ListAttackLogsRequest {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp() {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: number): ListAttackLogsRequest {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: number | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort() {
        return this['dst_port'];
    }
    public withProtocol(protocol: ListAttackLogsRequestProtocolEnum): ListAttackLogsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withApp(app: string): ListAttackLogsRequest {
        this['app'] = app;
        return this;
    }
    public withLogId(logId: string): ListAttackLogsRequest {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string | undefined) {
        this['log_id'] = logId;
    }
    public get logId() {
        return this['log_id'];
    }
    public withNextDate(nextDate: number): ListAttackLogsRequest {
        this['next_date'] = nextDate;
        return this;
    }
    public set nextDate(nextDate: number | undefined) {
        this['next_date'] = nextDate;
    }
    public get nextDate() {
        return this['next_date'];
    }
    public withOffset(offset: number): ListAttackLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAttackLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withFwInstanceId(fwInstanceId: string): ListAttackLogsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
    public withAction(action: ListAttackLogsRequestActionEnum): ListAttackLogsRequest {
        this['action'] = action;
        return this;
    }
    public withDirection(direction: ListAttackLogsRequestDirectionEnum): ListAttackLogsRequest {
        this['direction'] = direction;
        return this;
    }
    public withAttackType(attackType: string): ListAttackLogsRequest {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: string | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType() {
        return this['attack_type'];
    }
    public withAttackRule(attackRule: string): ListAttackLogsRequest {
        this['attack_rule'] = attackRule;
        return this;
    }
    public set attackRule(attackRule: string | undefined) {
        this['attack_rule'] = attackRule;
    }
    public get attackRule() {
        return this['attack_rule'];
    }
    public withLevel(level: string): ListAttackLogsRequest {
        this['level'] = level;
        return this;
    }
    public withSource(source: string): ListAttackLogsRequest {
        this['source'] = source;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAttackLogsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAttackLogsRequestProtocolEnum {
    E_6 = '6',
    E_17 = '17',
    E_1 = '1',
    E_58 = '58'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAttackLogsRequestActionEnum {
    E_0 = '0',
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAttackLogsRequestDirectionEnum {
    E_0 = '0',
    E_1 = '1'
}
