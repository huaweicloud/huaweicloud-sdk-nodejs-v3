

export class ImageBatchSyncReqUrls {
    public url?: string;
    private 'data_id'?: string;
    public constructor(url?: string, dataId?: string) { 
        this['url'] = url;
        this['data_id'] = dataId;
    }
    public withUrl(url: string): ImageBatchSyncReqUrls {
        this['url'] = url;
        return this;
    }
    public withDataId(dataId: string): ImageBatchSyncReqUrls {
        this['data_id'] = dataId;
        return this;
    }
    public set dataId(dataId: string  | undefined) {
        this['data_id'] = dataId;
    }
    public get dataId(): string | undefined {
        return this['data_id'];
    }
}