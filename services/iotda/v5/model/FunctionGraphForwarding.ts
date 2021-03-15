

export class FunctionGraphForwarding {
    private 'func_urn': string | undefined;
    private 'func_name': string | undefined;
    public constructor(funcUrn: any, funcName: any) { 
        this['func_urn'] = funcUrn;
        this['func_name'] = funcName;
    }
    public withFuncUrn(funcUrn: string): FunctionGraphForwarding {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn() {
        return this['func_urn'];
    }
    public withFuncName(funcName: string): FunctionGraphForwarding {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName() {
        return this['func_name'];
    }
}