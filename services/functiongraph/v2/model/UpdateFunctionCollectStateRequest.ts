

export class UpdateFunctionCollectStateRequest {
    private 'func_urn'?: string;
    public state?: string;
    private 'Content-Type'?: string;
    public constructor(funcUrn?: string, state?: string, contentType?: string) { 
        this['func_urn'] = funcUrn;
        this['state'] = state;
        this['Content-Type'] = contentType;
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
    public withContentType(contentType: string): UpdateFunctionCollectStateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}