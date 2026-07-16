

export class ShowDynamicStorageRequest {
    private 'instance_id'?: string;
    private 'storage_id'?: string;
    public constructor(instanceId?: string, storageId?: string) { 
        this['instance_id'] = instanceId;
        this['storage_id'] = storageId;
    }
    public withInstanceId(instanceId: string): ShowDynamicStorageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStorageId(storageId: string): ShowDynamicStorageRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
}