

export class NoDataCondition {
    private 'no_data_timeframe'?: number;
    private 'no_data_alert_state'?: NoDataConditionNoDataAlertStateEnum | string;
    private 'notify_no_data'?: boolean;
    public constructor() { 
    }
    public withNoDataTimeframe(noDataTimeframe: number): NoDataCondition {
        this['no_data_timeframe'] = noDataTimeframe;
        return this;
    }
    public set noDataTimeframe(noDataTimeframe: number  | undefined) {
        this['no_data_timeframe'] = noDataTimeframe;
    }
    public get noDataTimeframe(): number | undefined {
        return this['no_data_timeframe'];
    }
    public withNoDataAlertState(noDataAlertState: NoDataConditionNoDataAlertStateEnum | string): NoDataCondition {
        this['no_data_alert_state'] = noDataAlertState;
        return this;
    }
    public set noDataAlertState(noDataAlertState: NoDataConditionNoDataAlertStateEnum | string  | undefined) {
        this['no_data_alert_state'] = noDataAlertState;
    }
    public get noDataAlertState(): NoDataConditionNoDataAlertStateEnum | string | undefined {
        return this['no_data_alert_state'];
    }
    public withNotifyNoData(notifyNoData: boolean): NoDataCondition {
        this['notify_no_data'] = notifyNoData;
        return this;
    }
    public set notifyNoData(notifyNoData: boolean  | undefined) {
        this['notify_no_data'] = notifyNoData;
    }
    public get notifyNoData(): boolean | undefined {
        return this['notify_no_data'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NoDataConditionNoDataAlertStateEnum {
    NO_DATA = 'no_data',
    ALERTING = 'alerting',
    OK = 'ok',
    PRE_STATE = 'pre_state'
}
