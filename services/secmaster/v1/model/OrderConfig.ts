import { AlertConfig } from './AlertConfig';
import { UsageThreshold } from './UsageThreshold';


export class OrderConfig {
    private 'threshold_list'?: Array<UsageThreshold>;
    private 'alert_config'?: AlertConfig;
    public constructor() { 
    }
    public withThresholdList(thresholdList: Array<UsageThreshold>): OrderConfig {
        this['threshold_list'] = thresholdList;
        return this;
    }
    public set thresholdList(thresholdList: Array<UsageThreshold>  | undefined) {
        this['threshold_list'] = thresholdList;
    }
    public get thresholdList(): Array<UsageThreshold> | undefined {
        return this['threshold_list'];
    }
    public withAlertConfig(alertConfig: AlertConfig): OrderConfig {
        this['alert_config'] = alertConfig;
        return this;
    }
    public set alertConfig(alertConfig: AlertConfig  | undefined) {
        this['alert_config'] = alertConfig;
    }
    public get alertConfig(): AlertConfig | undefined {
        return this['alert_config'];
    }
}