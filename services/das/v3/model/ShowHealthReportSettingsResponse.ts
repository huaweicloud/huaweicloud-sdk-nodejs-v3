
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHealthReportSettingsResponse extends SdkResponse {
    private 'update_at'?: number;
    private 'do_ai_anomaly_detection'?: boolean;
    public constructor() { 
        super();
    }
    public withUpdateAt(updateAt: number): ShowHealthReportSettingsResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withDoAiAnomalyDetection(doAiAnomalyDetection: boolean): ShowHealthReportSettingsResponse {
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