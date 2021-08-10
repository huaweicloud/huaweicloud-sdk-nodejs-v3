

export class VodSampleData {
    public storage?: number;
    public transcode?: number;
    public constructor() { 
    }
    public withStorage(storage: number): VodSampleData {
        this['storage'] = storage;
        return this;
    }
    public withTranscode(transcode: number): VodSampleData {
        this['transcode'] = transcode;
        return this;
    }
}