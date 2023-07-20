

export class ShowSecretVersionRequest {
    private 'secret_name'?: string;
    private 'version_id'?: string;
    public constructor(secretName?: string, versionId?: string) { 
        this['secret_name'] = secretName;
        this['version_id'] = versionId;
    }
    public withSecretName(secretName: string): ShowSecretVersionRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withVersionId(versionId: string): ShowSecretVersionRequest {
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