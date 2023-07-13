

export class DataBucketQuery {
    private 'data_bucket_name'?: string | undefined;
    private 'search_enabled'?: boolean | undefined;
    private 'data_event'?: Array<DataBucketQueryDataEventEnum> | undefined;
    public constructor() { 
    }
    public withDataBucketName(dataBucketName: string): DataBucketQuery {
        this['data_bucket_name'] = dataBucketName;
        return this;
    }
    public set dataBucketName(dataBucketName: string | undefined) {
        this['data_bucket_name'] = dataBucketName;
    }
    public get dataBucketName() {
        return this['data_bucket_name'];
    }
    public withSearchEnabled(searchEnabled: boolean): DataBucketQuery {
        this['search_enabled'] = searchEnabled;
        return this;
    }
    public set searchEnabled(searchEnabled: boolean | undefined) {
        this['search_enabled'] = searchEnabled;
    }
    public get searchEnabled() {
        return this['search_enabled'];
    }
    public withDataEvent(dataEvent: Array<DataBucketQueryDataEventEnum>): DataBucketQuery {
        this['data_event'] = dataEvent;
        return this;
    }
    public set dataEvent(dataEvent: Array<DataBucketQueryDataEventEnum> | undefined) {
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
export enum DataBucketQueryDataEventEnum {
    WRITE = 'WRITE',
    READ = 'READ'
}
