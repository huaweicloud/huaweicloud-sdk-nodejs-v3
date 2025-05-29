

export class ListTransfersRequest {
    private 'Content-Type'?: string;
    private 'log_transfer_type'?: ListTransfersRequestLogTransferTypeEnum | string;
    private 'log_group_name'?: string;
    private 'log_stream_name'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListTransfersRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLogTransferType(logTransferType: ListTransfersRequestLogTransferTypeEnum | string): ListTransfersRequest {
        this['log_transfer_type'] = logTransferType;
        return this;
    }
    public set logTransferType(logTransferType: ListTransfersRequestLogTransferTypeEnum | string  | undefined) {
        this['log_transfer_type'] = logTransferType;
    }
    public get logTransferType(): ListTransfersRequestLogTransferTypeEnum | string | undefined {
        return this['log_transfer_type'];
    }
    public withLogGroupName(logGroupName: string): ListTransfersRequest {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamName(logStreamName: string): ListTransfersRequest {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
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
