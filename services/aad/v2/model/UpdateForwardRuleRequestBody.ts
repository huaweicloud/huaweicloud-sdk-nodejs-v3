

export class UpdateForwardRuleRequestBody {
    private 'source_ip'?: string;
    public constructor(sourceIp?: string) { 
        this['source_ip'] = sourceIp;
    }
    public withSourceIp(sourceIp: string): UpdateForwardRuleRequestBody {
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