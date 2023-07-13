

export class ShowSecretVersionRequest {
    private 'secret_name': string | undefined;
    private 'version_id': string | undefined;
    public constructor(secretName?: any, versionId?: any) { 
        this['secret_name'] = secretName;
        this['version_id'] = versionId;
    }
    public withSecretName(secretName: string): ShowSecretVersionRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName() {
        return this['secret_name'];
    }
    public withVersionId(versionId: string): ShowSecretVersionRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId() {
        return this['version_id'];
    }
}