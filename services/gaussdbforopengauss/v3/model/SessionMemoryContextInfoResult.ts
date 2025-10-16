

export class SessionMemoryContextInfoResult {
    private 'context_name'?: string;
    public amount?: number;
    public size?: number;
    public constructor() { 
    }
    public withContextName(contextName: string): SessionMemoryContextInfoResult {
        this['context_name'] = contextName;
        return this;
    }
    public set contextName(contextName: string  | undefined) {
        this['context_name'] = contextName;
    }
    public get contextName(): string | undefined {
        return this['context_name'];
    }
    public withAmount(amount: number): SessionMemoryContextInfoResult {
        this['amount'] = amount;
        return this;
    }
    public withSize(size: number): SessionMemoryContextInfoResult {
        this['size'] = size;
        return this;
    }
}