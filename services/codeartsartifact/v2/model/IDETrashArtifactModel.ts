

export class IDETrashArtifactModel {
    public id?: string;
    public format?: string;
    public status?: string;
    public uri?: string;
    public constructor() { 
    }
    public withId(id: string): IDETrashArtifactModel {
        this['id'] = id;
        return this;
    }
    public withFormat(format: string): IDETrashArtifactModel {
        this['format'] = format;
        return this;
    }
    public withStatus(status: string): IDETrashArtifactModel {
        this['status'] = status;
        return this;
    }
    public withUri(uri: string): IDETrashArtifactModel {
        this['uri'] = uri;
        return this;
    }
}