

export class DeleteDependencyVersionRequest {
    private 'depend_id'?: string;
    public version?: string;
    public constructor(dependId?: string, version?: string) { 
        this['depend_id'] = dependId;
        this['version'] = version;
    }
    public withDependId(dependId: string): DeleteDependencyVersionRequest {
        this['depend_id'] = dependId;
        return this;
    }
    public set dependId(dependId: string  | undefined) {
        this['depend_id'] = dependId;
    }
    public get dependId(): string | undefined {
        return this['depend_id'];
    }
    public withVersion(version: string): DeleteDependencyVersionRequest {
        this['version'] = version;
        return this;
    }
}