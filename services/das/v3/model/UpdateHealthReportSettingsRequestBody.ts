

export class UpdateHealthReportSettingsRequestBody {
    private 'do_ai_anomaly_detection'?: boolean;
    public constructor(doAiAnomalyDetection?: boolean) { 
        this['do_ai_anomaly_detection'] = doAiAnomalyDetection;
    }
    public withDoAiAnomalyDetection(doAiAnomalyDetection: boolean): UpdateHealthReportSettingsRequestBody {
        this['do_ai_anomaly_detection'] = doAiAnomalyDetection;
        return this;
    }
    public set doAiAnomalyDetection(doAiAnomalyDetection: boolean  | undefined) {
        this['do_ai_anomaly_detection'] = doAiAnomalyDetection;
    }
    public get doAiAnomalyDetection(): boolean | undefined {
        return this['do_ai_anomaly_detection'];
    }
}