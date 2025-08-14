

export class ShowProjectConfigRequest {
    private 'cloud_storage_id'?: string;
    public constructor(cloudStorageId?: string) { 
        this['cloud_storage_id'] = cloudStorageId;
    }
    public withCloudStorageId(cloudStorageId: string): ShowProjectConfigRequest {
        this['cloud_storage_id'] = cloudStorageId;
        return this;
    }
    public set cloudStorageId(cloudStorageId: string  | undefined) {
        this['cloud_storage_id'] = cloudStorageId;
    }
    public get cloudStorageId(): string | undefined {
        return this['cloud_storage_id'];
    }
}