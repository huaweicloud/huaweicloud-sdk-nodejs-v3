

export class DataBucket {
    private 'data_bucket_name'?: string;
    private 'data_event'?: Array<DataBucketDataEventEnum> | Array<string>;
    public constructor() { 
    }
    public withDataBucketName(dataBucketName: string): DataBucket {
        this['data_bucket_name'] = dataBucketName;
        return this;
    }
    public set dataBucketName(dataBucketName: string  | undefined) {
        this['data_bucket_name'] = dataBucketName;
    }
    public get dataBucketName(): string | undefined {
        return this['data_bucket_name'];
    }
    public withDataEvent(dataEvent: Array<DataBucketDataEventEnum> | Array<string>): DataBucket {
        this['data_event'] = dataEvent;
        return this;
    }
    public set dataEvent(dataEvent: Array<DataBucketDataEventEnum> | Array<string>  | undefined) {
        this['data_event'] = dataEvent;
    }
    public get dataEvent(): Array<DataBucketDataEventEnum> | Array<string> | undefined {
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
