

export class RaspProtectHistoryResponseInfo {
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'alarm_time'?: object;
    private 'event_name'?: string;
    public severity?: string;
    private 'req_src_ip'?: string;
    private 'app_stack'?: string;
    private 'attack_input_name'?: string;
    private 'attack_input_value'?: string;
    private 'query_string'?: string;
    private 'req_headers'?: string;
    private 'req_method'?: string;
    private 'req_params'?: string;
    private 'req_path'?: string;
    private 'req_protocol'?: string;
    private 'req_url'?: string;
    private 'attack_tag'?: string;
    private 'chk_probe'?: string;
    private 'chk_rule'?: string;
    private 'chk_rule_desc'?: string;
    private 'exist_bug'?: string;
    public constructor() { 
    }
    public withHostName(hostName: string): RaspProtectHistoryResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): RaspProtectHistoryResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withAlarmTime(alarmTime: object): RaspProtectHistoryResponseInfo {
        this['alarm_time'] = alarmTime;
        return this;
    }
    public set alarmTime(alarmTime: object  | undefined) {
        this['alarm_time'] = alarmTime;
    }
    public get alarmTime(): object | undefined {
        return this['alarm_time'];
    }
    public withEventName(eventName: string): RaspProtectHistoryResponseInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withSeverity(severity: string): RaspProtectHistoryResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withReqSrcIp(reqSrcIp: string): RaspProtectHistoryResponseInfo {
        this['req_src_ip'] = reqSrcIp;
        return this;
    }
    public set reqSrcIp(reqSrcIp: string  | undefined) {
        this['req_src_ip'] = reqSrcIp;
    }
    public get reqSrcIp(): string | undefined {
        return this['req_src_ip'];
    }
    public withAppStack(appStack: string): RaspProtectHistoryResponseInfo {
        this['app_stack'] = appStack;
        return this;
    }
    public set appStack(appStack: string  | undefined) {
        this['app_stack'] = appStack;
    }
    public get appStack(): string | undefined {
        return this['app_stack'];
    }
    public withAttackInputName(attackInputName: string): RaspProtectHistoryResponseInfo {
        this['attack_input_name'] = attackInputName;
        return this;
    }
    public set attackInputName(attackInputName: string  | undefined) {
        this['attack_input_name'] = attackInputName;
    }
    public get attackInputName(): string | undefined {
        return this['attack_input_name'];
    }
    public withAttackInputValue(attackInputValue: string): RaspProtectHistoryResponseInfo {
        this['attack_input_value'] = attackInputValue;
        return this;
    }
    public set attackInputValue(attackInputValue: string  | undefined) {
        this['attack_input_value'] = attackInputValue;
    }
    public get attackInputValue(): string | undefined {
        return this['attack_input_value'];
    }
    public withQueryString(queryString: string): RaspProtectHistoryResponseInfo {
        this['query_string'] = queryString;
        return this;
    }
    public set queryString(queryString: string  | undefined) {
        this['query_string'] = queryString;
    }
    public get queryString(): string | undefined {
        return this['query_string'];
    }
    public withReqHeaders(reqHeaders: string): RaspProtectHistoryResponseInfo {
        this['req_headers'] = reqHeaders;
        return this;
    }
    public set reqHeaders(reqHeaders: string  | undefined) {
        this['req_headers'] = reqHeaders;
    }
    public get reqHeaders(): string | undefined {
        return this['req_headers'];
    }
    public withReqMethod(reqMethod: string): RaspProtectHistoryResponseInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): string | undefined {
        return this['req_method'];
    }
    public withReqParams(reqParams: string): RaspProtectHistoryResponseInfo {
        this['req_params'] = reqParams;
        return this;
    }
    public set reqParams(reqParams: string  | undefined) {
        this['req_params'] = reqParams;
    }
    public get reqParams(): string | undefined {
        return this['req_params'];
    }
    public withReqPath(reqPath: string): RaspProtectHistoryResponseInfo {
        this['req_path'] = reqPath;
        return this;
    }
    public set reqPath(reqPath: string  | undefined) {
        this['req_path'] = reqPath;
    }
    public get reqPath(): string | undefined {
        return this['req_path'];
    }
    public withReqProtocol(reqProtocol: string): RaspProtectHistoryResponseInfo {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): string | undefined {
        return this['req_protocol'];
    }
    public withReqUrl(reqUrl: string): RaspProtectHistoryResponseInfo {
        this['req_url'] = reqUrl;
        return this;
    }
    public set reqUrl(reqUrl: string  | undefined) {
        this['req_url'] = reqUrl;
    }
    public get reqUrl(): string | undefined {
        return this['req_url'];
    }
    public withAttackTag(attackTag: string): RaspProtectHistoryResponseInfo {
        this['attack_tag'] = attackTag;
        return this;
    }
    public set attackTag(attackTag: string  | undefined) {
        this['attack_tag'] = attackTag;
    }
    public get attackTag(): string | undefined {
        return this['attack_tag'];
    }
    public withChkProbe(chkProbe: string): RaspProtectHistoryResponseInfo {
        this['chk_probe'] = chkProbe;
        return this;
    }
    public set chkProbe(chkProbe: string  | undefined) {
        this['chk_probe'] = chkProbe;
    }
    public get chkProbe(): string | undefined {
        return this['chk_probe'];
    }
    public withChkRule(chkRule: string): RaspProtectHistoryResponseInfo {
        this['chk_rule'] = chkRule;
        return this;
    }
    public set chkRule(chkRule: string  | undefined) {
        this['chk_rule'] = chkRule;
    }
    public get chkRule(): string | undefined {
        return this['chk_rule'];
    }
    public withChkRuleDesc(chkRuleDesc: string): RaspProtectHistoryResponseInfo {
        this['chk_rule_desc'] = chkRuleDesc;
        return this;
    }
    public set chkRuleDesc(chkRuleDesc: string  | undefined) {
        this['chk_rule_desc'] = chkRuleDesc;
    }
    public get chkRuleDesc(): string | undefined {
        return this['chk_rule_desc'];
    }
    public withExistBug(existBug: string): RaspProtectHistoryResponseInfo {
        this['exist_bug'] = existBug;
        return this;
    }
    public set existBug(existBug: string  | undefined) {
        this['exist_bug'] = existBug;
    }
    public get existBug(): string | undefined {
        return this['exist_bug'];
    }
}