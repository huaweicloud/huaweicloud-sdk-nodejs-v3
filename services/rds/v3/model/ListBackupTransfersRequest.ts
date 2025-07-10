

export class ListBackupTransfersRequest {
    public limit?: number;
    private 'order_field'?: string;
    private 'order_rule'?: string;
    private 'filter_field'?: string;
    private 'filter_content'?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'X-Language'?: string;
    private 'transfer_type'?: ListBackupTransfersRequestTransferTypeEnum | string;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListBackupTransfersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderField(orderField: string): ListBackupTransfersRequest {
        this['order_field'] = orderField;
        return this;
    }
    public set orderField(orderField: string  | undefined) {
        this['order_field'] = orderField;
    }
    public get orderField(): string | undefined {
        return this['order_field'];
    }
    public withOrderRule(orderRule: string): ListBackupTransfersRequest {
        this['order_rule'] = orderRule;
        return this;
    }
    public set orderRule(orderRule: string  | undefined) {
        this['order_rule'] = orderRule;
    }
    public get orderRule(): string | undefined {
        return this['order_rule'];
    }
    public withFilterField(filterField: string): ListBackupTransfersRequest {
        this['filter_field'] = filterField;
        return this;
    }
    public set filterField(filterField: string  | undefined) {
        this['filter_field'] = filterField;
    }
    public get filterField(): string | undefined {
        return this['filter_field'];
    }
    public withFilterContent(filterContent: string): ListBackupTransfersRequest {
        this['filter_content'] = filterContent;
        return this;
    }
    public set filterContent(filterContent: string  | undefined) {
        this['filter_content'] = filterContent;
    }
    public get filterContent(): string | undefined {
        return this['filter_content'];
    }
    public withBeginTime(beginTime: number): ListBackupTransfersRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ListBackupTransfersRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withXLanguage(xLanguage: string): ListBackupTransfersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withTransferType(transferType: ListBackupTransfersRequestTransferTypeEnum | string): ListBackupTransfersRequest {
        this['transfer_type'] = transferType;
        return this;
    }
    public set transferType(transferType: ListBackupTransfersRequestTransferTypeEnum | string  | undefined) {
        this['transfer_type'] = transferType;
    }
    public get transferType(): ListBackupTransfersRequestTransferTypeEnum | string | undefined {
        return this['transfer_type'];
    }
    public withOffset(offset: number): ListBackupTransfersRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBackupTransfersRequestTransferTypeEnum {
    MANUAL = 'manual',
    AUTO = 'auto'
}
