

export class TrashArtifactModelForDelete {
    public id?: string;
    public format?: string;
    public uri?: string;
    public status?: string;
    private 'include_pattern'?: string;
    public constructor(id?: string, format?: string, uri?: string, status?: string) { 
        this['id'] = id;
        this['format'] = format;
        this['uri'] = uri;
        this['status'] = status;
    }
    public withId(id: string): TrashArtifactModelForDelete {
        this['id'] = id;
        return this;
    }
    public withFormat(format: string): TrashArtifactModelForDelete {
        this['format'] = format;
        return this;
    }
    public withUri(uri: string): TrashArtifactModelForDelete {
        this['uri'] = uri;
        return this;
    }
    public withStatus(status: string): TrashArtifactModelForDelete {
        this['status'] = status;
        return this;
    }
    public withIncludePattern(includePattern: string): TrashArtifactModelForDelete {
        this['include_pattern'] = includePattern;
        return this;
    }
    public set includePattern(includePattern: string  | undefined) {
        this['include_pattern'] = includePattern;
    }
    public get includePattern(): string | undefined {
        return this['include_pattern'];
    }
}