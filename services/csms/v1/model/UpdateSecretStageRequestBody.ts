

export class UpdateSecretStageRequestBody {
    private 'version_id'?: string;
    public constructor(versionId?: string) { 
        this['version_id'] = versionId;
    }
    public withVersionId(versionId: string): UpdateSecretStageRequestBody {
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