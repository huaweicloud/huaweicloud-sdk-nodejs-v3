

export class Storage {
    private 'storage_handle'?: string;
    private 'storage_class'?: string;
    public constructor(storageHandle?: string, storageClass?: string) { 
        this['storage_handle'] = storageHandle;
        this['storage_class'] = storageClass;
    }
    public withStorageHandle(storageHandle: string): Storage {
        this['storage_handle'] = storageHandle;
        return this;
    }
    public set storageHandle(storageHandle: string  | undefined) {
        this['storage_handle'] = storageHandle;
    }
    public get storageHandle(): string | undefined {
        return this['storage_handle'];
    }
    public withStorageClass(storageClass: string): Storage {
        this['storage_class'] = storageClass;
        return this;
    }
    public set storageClass(storageClass: string  | undefined) {
        this['storage_class'] = storageClass;
    }
    public get storageClass(): string | undefined {
        return this['storage_class'];
    }
}