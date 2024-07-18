

export class VodSampleData {
    public storage?: number;
    private 'storage_warm'?: number;
    private 'storage_cold'?: number;
    public transcode?: number;
    public constructor() { 
    }
    public withStorage(storage: number): VodSampleData {
        this['storage'] = storage;
        return this;
    }
    public withStorageWarm(storageWarm: number): VodSampleData {
        this['storage_warm'] = storageWarm;
        return this;
    }
    public set storageWarm(storageWarm: number  | undefined) {
        this['storage_warm'] = storageWarm;
    }
    public get storageWarm(): number | undefined {
        return this['storage_warm'];
    }
    public withStorageCold(storageCold: number): VodSampleData {
        this['storage_cold'] = storageCold;
        return this;
    }
    public set storageCold(storageCold: number  | undefined) {
        this['storage_cold'] = storageCold;
    }
    public get storageCold(): number | undefined {
        return this['storage_cold'];
    }
    public withTranscode(transcode: number): VodSampleData {
        this['transcode'] = transcode;
        return this;
    }
}