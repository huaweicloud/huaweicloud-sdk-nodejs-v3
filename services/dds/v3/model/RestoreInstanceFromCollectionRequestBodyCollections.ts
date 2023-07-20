

export class RestoreInstanceFromCollectionRequestBodyCollections {
    private 'old_name'?: string;
    private 'new_name'?: string;
    private 'restore_collection_time'?: string;
    public constructor(oldName?: string, restoreCollectionTime?: string) { 
        this['old_name'] = oldName;
        this['restore_collection_time'] = restoreCollectionTime;
    }
    public withOldName(oldName: string): RestoreInstanceFromCollectionRequestBodyCollections {
        this['old_name'] = oldName;
        return this;
    }
    public set oldName(oldName: string  | undefined) {
        this['old_name'] = oldName;
    }
    public get oldName(): string | undefined {
        return this['old_name'];
    }
    public withNewName(newName: string): RestoreInstanceFromCollectionRequestBodyCollections {
        this['new_name'] = newName;
        return this;
    }
    public set newName(newName: string  | undefined) {
        this['new_name'] = newName;
    }
    public get newName(): string | undefined {
        return this['new_name'];
    }
    public withRestoreCollectionTime(restoreCollectionTime: string): RestoreInstanceFromCollectionRequestBodyCollections {
        this['restore_collection_time'] = restoreCollectionTime;
        return this;
    }
    public set restoreCollectionTime(restoreCollectionTime: string  | undefined) {
        this['restore_collection_time'] = restoreCollectionTime;
    }
    public get restoreCollectionTime(): string | undefined {
        return this['restore_collection_time'];
    }
}