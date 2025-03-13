

export class CreateOrUpdateSecretDetail {
    public name?: string;
    private 'version_id'?: string;
    public constructor(name?: string, versionId?: string) { 
        this['name'] = name;
        this['version_id'] = versionId;
    }
    public withName(name: string): CreateOrUpdateSecretDetail {
        this['name'] = name;
        return this;
    }
    public withVersionId(versionId: string): CreateOrUpdateSecretDetail {
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