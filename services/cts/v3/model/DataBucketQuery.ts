

export class DataBucketQuery {
    private 'data_bucket_name'?: string;
    private 'search_enabled'?: boolean;
    private 'data_event'?: Array<DataBucketQueryDataEventEnum> | Array<string>;
    public constructor() { 
    }
    public withDataBucketName(dataBucketName: string): DataBucketQuery {
        this['data_bucket_name'] = dataBucketName;
        return this;
    }
    public set dataBucketName(dataBucketName: string  | undefined) {
        this['data_bucket_name'] = dataBucketName;
    }
    public get dataBucketName(): string | undefined {
        return this['data_bucket_name'];
    }
    public withSearchEnabled(searchEnabled: boolean): DataBucketQuery {
        this['search_enabled'] = searchEnabled;
        return this;
    }
    public set searchEnabled(searchEnabled: boolean  | undefined) {
        this['search_enabled'] = searchEnabled;
    }
    public get searchEnabled(): boolean | undefined {
        return this['search_enabled'];
    }
    public withDataEvent(dataEvent: Array<DataBucketQueryDataEventEnum> | Array<string>): DataBucketQuery {
        this['data_event'] = dataEvent;
        return this;
    }
    public set dataEvent(dataEvent: Array<DataBucketQueryDataEventEnum> | Array<string>  | undefined) {
        this['data_event'] = dataEvent;
    }
    public get dataEvent(): Array<DataBucketQueryDataEventEnum> | Array<string> | undefined {
        return this['data_event'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataBucketQueryDataEventEnum {
    WRITE = 'WRITE',
    READ = 'READ'
}
