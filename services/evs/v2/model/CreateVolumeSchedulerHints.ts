

export class CreateVolumeSchedulerHints {
    private 'dedicated_storage_id'?: string | undefined;
    public constructor() { 
    }
    public withDedicatedStorageId(dedicatedStorageId: string): CreateVolumeSchedulerHints {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId() {
        return this['dedicated_storage_id'];
    }
}