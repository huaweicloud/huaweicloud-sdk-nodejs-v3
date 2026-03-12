

export class FaiureResource {
    public resource?: string;
    private 'failure_info'?: string;
    public constructor() { 
    }
    public withResource(resource: string): FaiureResource {
        this['resource'] = resource;
        return this;
    }
    public withFailureInfo(failureInfo: string): FaiureResource {
        this['failure_info'] = failureInfo;
        return this;
    }
    public set failureInfo(failureInfo: string  | undefined) {
        this['failure_info'] = failureInfo;
    }
    public get failureInfo(): string | undefined {
        return this['failure_info'];
    }
}