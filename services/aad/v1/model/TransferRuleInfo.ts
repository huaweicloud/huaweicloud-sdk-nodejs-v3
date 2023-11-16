

export class TransferRuleInfo {
    private 'rule_id'?: string;
    private 'forward_protocol'?: string;
    private 'forward_port'?: number;
    private 'source_port'?: number;
    private 'lb_method'?: string;
    private 'source_ip'?: string;
    public status?: number;
    public constructor() { 
    }
    public withRuleId(ruleId: string): TransferRuleInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withForwardProtocol(forwardProtocol: string): TransferRuleInfo {
        this['forward_protocol'] = forwardProtocol;
        return this;
    }
    public set forwardProtocol(forwardProtocol: string  | undefined) {
        this['forward_protocol'] = forwardProtocol;
    }
    public get forwardProtocol(): string | undefined {
        return this['forward_protocol'];
    }
    public withForwardPort(forwardPort: number): TransferRuleInfo {
        this['forward_port'] = forwardPort;
        return this;
    }
    public set forwardPort(forwardPort: number  | undefined) {
        this['forward_port'] = forwardPort;
    }
    public get forwardPort(): number | undefined {
        return this['forward_port'];
    }
    public withSourcePort(sourcePort: number): TransferRuleInfo {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: number  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): number | undefined {
        return this['source_port'];
    }
    public withLbMethod(lbMethod: string): TransferRuleInfo {
        this['lb_method'] = lbMethod;
        return this;
    }
    public set lbMethod(lbMethod: string  | undefined) {
        this['lb_method'] = lbMethod;
    }
    public get lbMethod(): string | undefined {
        return this['lb_method'];
    }
    public withSourceIp(sourceIp: string): TransferRuleInfo {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withStatus(status: number): TransferRuleInfo {
        this['status'] = status;
        return this;
    }
}