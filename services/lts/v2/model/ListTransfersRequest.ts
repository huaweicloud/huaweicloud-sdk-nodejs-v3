

export class ListTransfersRequest {
    private 'Content-Type': string | undefined;
    private 'log_transfer_type'?: ListTransfersRequestLogTransferTypeEnum | undefined;
    private 'log_group_name'?: string | undefined;
    private 'log_stream_name'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListTransfersRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withLogTransferType(logTransferType: ListTransfersRequestLogTransferTypeEnum): ListTransfersRequest {
        this['log_transfer_type'] = logTransferType;
        return this;
    }
    public set logTransferType(logTransferType: ListTransfersRequestLogTransferTypeEnum | undefined) {
        this['log_transfer_type'] = logTransferType;
    }
    public get logTransferType() {
        return this['log_transfer_type'];
    }
    public withLogGroupName(logGroupName: string): ListTransfersRequest {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogStreamName(logStreamName: string): ListTransfersRequest {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
    public withOffset(offset: number): ListTransfersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTransfersRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTransfersRequestLogTransferTypeEnum {
    OBS = 'OBS',
    DIS = 'DIS',
    DMS = 'DMS'
}
