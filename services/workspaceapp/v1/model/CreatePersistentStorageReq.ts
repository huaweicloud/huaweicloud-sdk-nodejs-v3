import { Storage } from './Storage';


export class CreatePersistentStorageReq {
    public name?: string;
    private 'storage_metadata'?: Storage;
    public constructor(name?: string, storageMetadata?: Storage) { 
        this['name'] = name;
        this['storage_metadata'] = storageMetadata;
    }
    public withName(name: string): CreatePersistentStorageReq {
        this['name'] = name;
        return this;
    }
    public withStorageMetadata(storageMetadata: Storage): CreatePersistentStorageReq {
        this['storage_metadata'] = storageMetadata;
        return this;
    }
    public set storageMetadata(storageMetadata: Storage  | undefined) {
        this['storage_metadata'] = storageMetadata;
    }
    public get storageMetadata(): Storage | undefined {
        return this['storage_metadata'];
    }
}