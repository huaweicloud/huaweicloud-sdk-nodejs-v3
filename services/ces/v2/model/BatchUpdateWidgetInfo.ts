

export class BatchUpdateWidgetInfo {
    private 'widget_id'?: string;
    private 'ret_status'?: BatchUpdateWidgetInfoRetStatusEnum | string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withWidgetId(widgetId: string): BatchUpdateWidgetInfo {
        this['widget_id'] = widgetId;
        return this;
    }
    public set widgetId(widgetId: string  | undefined) {
        this['widget_id'] = widgetId;
    }
    public get widgetId(): string | undefined {
        return this['widget_id'];
    }
    public withRetStatus(retStatus: BatchUpdateWidgetInfoRetStatusEnum | string): BatchUpdateWidgetInfo {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: BatchUpdateWidgetInfoRetStatusEnum | string  | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus(): BatchUpdateWidgetInfoRetStatusEnum | string | undefined {
        return this['ret_status'];
    }
    public withErrorMsg(errorMsg: string): BatchUpdateWidgetInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateWidgetInfoRetStatusEnum {
    SUCCESSFUL = 'successful',
    ERROR = 'error'
}
