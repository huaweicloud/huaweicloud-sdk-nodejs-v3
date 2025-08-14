

export class CloudStorageOptions {
    private 'cloud_storage_rule'?: string;
    public constructor() { 
    }
    public withCloudStorageRule(cloudStorageRule: string): CloudStorageOptions {
        this['cloud_storage_rule'] = cloudStorageRule;
        return this;
    }
    public set cloudStorageRule(cloudStorageRule: string  | undefined) {
        this['cloud_storage_rule'] = cloudStorageRule;
    }
    public get cloudStorageRule(): string | undefined {
        return this['cloud_storage_rule'];
    }
}