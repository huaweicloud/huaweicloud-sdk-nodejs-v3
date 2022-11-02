

export class RegisterServerMonitorRequestBody {
    public monitorMetrics: string;
    public constructor(monitorMetrics?: any) { 
        this['monitorMetrics'] = monitorMetrics;
    }
    public withMonitorMetrics(monitorMetrics: string): RegisterServerMonitorRequestBody {
        this['monitorMetrics'] = monitorMetrics;
        return this;
    }
}