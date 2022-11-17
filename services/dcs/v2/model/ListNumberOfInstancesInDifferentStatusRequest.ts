

export class ListNumberOfInstancesInDifferentStatusRequest {
    private 'include_failure'?: string | undefined;
    public constructor() { 
    }
    public withIncludeFailure(includeFailure: string): ListNumberOfInstancesInDifferentStatusRequest {
        this['include_failure'] = includeFailure;
        return this;
    }
    public set includeFailure(includeFailure: string | undefined) {
        this['include_failure'] = includeFailure;
    }
    public get includeFailure() {
        return this['include_failure'];
    }
}