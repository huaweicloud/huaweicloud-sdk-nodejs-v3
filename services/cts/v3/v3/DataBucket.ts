

export class DataBucket {
    private 'data_bucket_name'?: string | undefined;
    private 'data_event'?: Array<DataBucketDataEventEnum> | undefined;
    public constructor() { 
    }
    public withDataBucketName(dataBucketName: string): DataBucket {
        this['data_bucket_name'] = dataBucketName;
        return this;
    }
    public set dataBucketName(dataBucketName: string | undefined) {
        this['data_bucket_name'] = dataBucketName;
    }
    public get dataBucketName() {
        return this['data_bucket_name'];
    }
    public withDataEvent(dataEvent: Array<DataBucketDataEventEnum>): DataBucket {
        this['data_event'] = dataEvent;
        return this;
    }
    public set dataEvent(dataEvent: Array<DataBucketDataEventEnum> | undefined) {
        this['data_event'] = dataEvent;
    }
    public get dataEvent() {
        return this['data_event'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataBucketDataEventEnum {
    WRITE = 'WRITE',
    READ = 'READ'
}
