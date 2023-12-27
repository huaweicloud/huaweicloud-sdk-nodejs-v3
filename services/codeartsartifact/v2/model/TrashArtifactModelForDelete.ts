

export class TrashArtifactModelForDelete {
    public id?: string;
    public fomat?: string;
    public uri?: string;
    public status?: string;
    private 'include_pattern'?: string;
    public constructor(id?: string, fomat?: string, uri?: string, status?: string) { 
        this['id'] = id;
        this['fomat'] = fomat;
        this['uri'] = uri;
        this['status'] = status;
    }
    public withId(id: string): TrashArtifactModelForDelete {
        this['id'] = id;
        return this;
    }
    public withFomat(fomat: string): TrashArtifactModelForDelete {
        this['fomat'] = fomat;
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