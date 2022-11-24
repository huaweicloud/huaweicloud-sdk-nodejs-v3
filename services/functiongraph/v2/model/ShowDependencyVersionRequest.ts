

export class ShowDependencyVersionRequest {
    private 'depend_id': string | undefined;
    public version: string;
    public constructor(dependId?: any, version?: any) { 
        this['depend_id'] = dependId;
        this['version'] = version;
    }
    public withDependId(dependId: string): ShowDependencyVersionRequest {
        this['depend_id'] = dependId;
        return this;
    }
    public set dependId(dependId: string | undefined) {
        this['depend_id'] = dependId;
    }
    public get dependId() {
        return this['depend_id'];
    }
    public withVersion(version: string): ShowDependencyVersionRequest {
        this['version'] = version;
        return this;
    }
}