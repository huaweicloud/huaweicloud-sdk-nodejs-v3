

export class RegisterServerMonitorRequestBody {
    public monitorMetrics?: RegisterServerMonitorRequestBodyMonitorMetricsEnum | string;
    public constructor(monitorMetrics?: string) { 
        this['monitorMetrics'] = monitorMetrics;
    }
    public withMonitorMetrics(monitorMetrics: RegisterServerMonitorRequestBodyMonitorMetricsEnum | string): RegisterServerMonitorRequestBody {
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
