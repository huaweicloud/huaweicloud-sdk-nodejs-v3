

export class UpdateFunctionCollectStateRequest {
    private 'func_urn'?: string;
    public state?: string;
    public constructor(funcUrn?: string, state?: string) { 
        this['func_urn'] = funcUrn;
        this['state'] = state;
    }
    public withFuncUrn(funcUrn: string): UpdateFunctionCollectStateRequest {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withState(state: string): UpdateFunctionCollectStateRequest {
        this['state'] = state;
        return this;
    }
}