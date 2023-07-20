

export class FunctionGraphForwarding {
    private 'func_urn'?: string;
    private 'func_name'?: string;
    public constructor(funcUrn?: string, funcName?: string) { 
        this['func_urn'] = funcUrn;
        this['func_name'] = funcName;
    }
    public withFuncUrn(funcUrn: string): FunctionGraphForwarding {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withFuncName(funcName: string): FunctionGraphForwarding {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
}