import { Storage } from './Storage';


export class StorageMetadata {
    private 'storage_handle'?: string;
    private 'storage_class'?: string;
    public name?: string;
    public region?: string;
    private 'export_location'?: string;
    public constructor(storageHandle?: string, storageClass?: string) { 
        this['storage_handle'] = storageHandle;
        this['storage_class'] = storageClass;
    }
    public withStorageHandle(storageHandle: string): StorageMetadata {
        this['storage_handle'] = storageHandle;
        return this;
    }
    public set storageHandle(storageHandle: string  | undefined) {
        this['storage_handle'] = storageHandle;
    }
    public get storageHandle(): string | undefined {
        return this['storage_handle'];
    }
    public withStorageClass(storageClass: string): StorageMetadata {
        this['storage_class'] = storageClass;
        return this;
    }
    public set storageClass(storageClass: string  | undefined) {
        this['storage_class'] = storageClass;
    }
    public get storageClass(): string | undefined {
        return this['storage_class'];
    }
    public withName(name: string): StorageMetadata {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): StorageMetadata {
        this['region'] = region;
        return this;
    }
    public withExportLocation(exportLocation: string): StorageMetadata {
        this['export_location'] = exportLocation;
        return this;
    }
    public set exportLocation(exportLocation: string  | undefined) {
        this['export_location'] = exportLocation;
    }
    public get exportLocation(): string | undefined {
        return this['export_location'];
    }
}