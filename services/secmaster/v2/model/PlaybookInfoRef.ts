

export class PlaybookInfoRef {
    public id?: string;
    private 'version_id'?: string;
    public name?: string;
    public version?: string;
    public constructor() { 
    }
    public withId(id: string): PlaybookInfoRef {
        this['id'] = id;
        return this;
    }
    public withVersionId(versionId: string): PlaybookInfoRef {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withName(name: string): PlaybookInfoRef {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): PlaybookInfoRef {
        this['version'] = version;
        return this;
    }
}