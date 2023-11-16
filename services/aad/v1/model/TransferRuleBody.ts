

export class TransferRuleBody {
    private 'forward_protocol'?: string;
    private 'forward_port'?: number;
    private 'source_port'?: number;
    private 'source_ip'?: string;
    public constructor() { 
    }
    public withForwardProtocol(forwardProtocol: string): TransferRuleBody {
        this['forward_protocol'] = forwardProtocol;
        return this;
    }
    public set forwardProtocol(forwardProtocol: string  | undefined) {
        this['forward_protocol'] = forwardProtocol;
    }
    public get forwardProtocol(): string | undefined {
        return this['forward_protocol'];
    }
    public withForwardPort(forwardPort: number): TransferRuleBody {
        this['forward_port'] = forwardPort;
        return this;
    }
    public set forwardPort(forwardPort: number  | undefined) {
        this['forward_port'] = forwardPort;
    }
    public get forwardPort(): number | undefined {
        return this['forward_port'];
    }
    public withSourcePort(sourcePort: number): TransferRuleBody {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: number  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): number | undefined {
        return this['source_port'];
    }
    public withSourceIp(sourceIp: string): TransferRuleBody {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
}