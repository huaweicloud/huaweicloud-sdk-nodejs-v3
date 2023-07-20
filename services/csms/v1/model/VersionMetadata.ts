

export class VersionMetadata {
    public id?: string;
    private 'create_time'?: number;
    private 'kms_key_id'?: string;
    private 'secret_name'?: string;
    private 'version_stages'?: Array<string>;
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
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withKmsKeyId(kmsKeyId: string): VersionMetadata {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
    public withSecretName(secretName: string): VersionMetadata {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withVersionStages(versionStages: Array<string>): VersionMetadata {
        this['version_stages'] = versionStages;
        return this;
    }
    public set versionStages(versionStages: Array<string>  | undefined) {
        this['version_stages'] = versionStages;
    }
    public get versionStages(): Array<string> | undefined {
        return this['version_stages'];
    }
}