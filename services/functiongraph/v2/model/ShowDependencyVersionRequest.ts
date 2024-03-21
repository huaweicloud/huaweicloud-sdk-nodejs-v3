

export class ShowDependencyVersionRequest {
    private 'depend_id'?: string;
    public version?: string;
    private 'Content-Type'?: string;
    public constructor(dependId?: string, version?: string, contentType?: string) { 
        this['depend_id'] = dependId;
        this['version'] = version;
        this['Content-Type'] = contentType;
    }
    public withDependId(dependId: string): ShowDependencyVersionRequest {
        this['depend_id'] = dependId;
        return this;
    }
    public set dependId(dependId: string  | undefined) {
        this['depend_id'] = dependId;
    }
    public get dependId(): string | undefined {
        return this['depend_id'];
    }
    public withVersion(version: string): ShowDependencyVersionRequest {
        this['version'] = version;
        return this;
    }
    public withContentType(contentType: string): ShowDependencyVersionRequest {
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