

export class HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
    public action?: string;
    private 'rule_name'?: string;
    private 'rule_id'?: string;
    private 'hit_time'?: number;
    private 'log_id'?: string;
    private 'src_ip'?: string;
    private 'src_port'?: string;
    private 'dst_ip'?: string;
    private 'dst_port'?: string;
    public protocol?: string;
    public app?: string;
    public constructor() { 
    }
    public withAction(action: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['action'] = action;
        return this;
    }
    public withRuleName(ruleName: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withHitTime(hitTime: number): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['hit_time'] = hitTime;
        return this;
    }
    public set hitTime(hitTime: number  | undefined) {
        this['hit_time'] = hitTime;
    }
    public get hitTime(): number | undefined {
        return this['hit_time'];
    }
    public withLogId(logId: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withSrcIp(srcIp: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: string  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): string | undefined {
        return this['src_ip'];
    }
    public withSrcPort(srcPort: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['src_port'] = srcPort;
        return this;
    }
    public set srcPort(srcPort: string  | undefined) {
        this['src_port'] = srcPort;
    }
    public get srcPort(): string | undefined {
        return this['src_port'];
    }
    public withDstIp(dstIp: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: string  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): string | undefined {
        return this['dst_ip'];
    }
    public withDstPort(dstPort: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['dst_port'] = dstPort;
        return this;
    }
    public set dstPort(dstPort: string  | undefined) {
        this['dst_port'] = dstPort;
    }
    public get dstPort(): string | undefined {
        return this['dst_port'];
    }
    public withProtocol(protocol: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['protocol'] = protocol;
        return this;
    }
    public withApp(app: string): HttpQueryCfwAccessControllerLogsResponseDTODataRecords {
        this['app'] = app;
        return this;
    }
}