

export class RegisterServerMonitorRequestBody {
    public monitorMetrics: RegisterServerMonitorRequestBodyMonitorMetricsEnum;
    public constructor(monitorMetrics?: any) { 
        this['monitorMetrics'] = monitorMetrics;
    }
    public withMonitorMetrics(monitorMetrics: RegisterServerMonitorRequestBodyMonitorMetricsEnum): RegisterServerMonitorRequestBody {
        this['monitorMetrics'] = monitorMetrics;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RegisterServerMonitorRequestBodyMonitorMetricsEnum {
    Empty = ''
}
