

export class FuncReservedInstance {
    private 'func_urn': string | undefined;
    public count: number;
    public constructor(funcUrn?: any, count?: any) { 
        this['func_urn'] = funcUrn;
        this['count'] = count;
    }
    public withFuncUrn(funcUrn: string): FuncReservedInstance {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn() {
        return this['func_urn'];
    }
    public withCount(count: number): FuncReservedInstance {
        this['count'] = count;
        return this;
    }
}