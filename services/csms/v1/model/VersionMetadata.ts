

export class VersionMetadata {
    public id?: string;
    private 'create_time'?: number | undefined;
    private 'kms_key_id'?: string | undefined;
    private 'secret_name'?: string | undefined;
    private 'version_stages'?: Array<string> | undefined;
    public constructor() { 
    }
    public withId(id: string): VersionMetadata {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: number): VersionMetadata {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withKmsKeyId(kmsKeyId: string): VersionMetadata {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId() {
        return this['kms_key_id'];
    }
    public withSecretName(secretName: string): VersionMetadata {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName() {
        return this['secret_name'];
    }
    public withVersionStages(versionStages: Array<string>): VersionMetadata {
        this['version_stages'] = versionStages;
        return this;
    }
    public set versionStages(versionStages: Array<string> | undefined) {
        this['version_stages'] = versionStages;
    }
    public get versionStages() {
        return this['version_stages'];
    }
}