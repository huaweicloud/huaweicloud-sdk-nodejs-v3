

export class ListNumberOfInstancesInDifferentStatusRequest {
    private 'include_failure'?: string;
    public constructor() { 
    }
    public withIncludeFailure(includeFailure: string): ListNumberOfInstancesInDifferentStatusRequest {
        this['include_failure'] = includeFailure;
        return this;
    }
    public set includeFailure(includeFailure: string  | undefined) {
        this['include_failure'] = includeFailure;
    }
    public get includeFailure(): string | undefined {
        return this['include_failure'];
    }
}