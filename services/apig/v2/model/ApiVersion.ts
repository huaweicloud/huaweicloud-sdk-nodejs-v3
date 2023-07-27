

export class ApiVersion {
    private 'version_id'?: string;
    public constructor() { 
    }
    public withVersionId(versionId: string): ApiVersion {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
}