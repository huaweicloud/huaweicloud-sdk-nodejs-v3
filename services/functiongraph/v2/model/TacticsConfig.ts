import { CronConfig } from './CronConfig';
import { MetricConfig } from './MetricConfig';


export class TacticsConfig {
    private 'cron_configs'?: Array<CronConfig>;
    private 'metric_configs'?: Array<MetricConfig>;
    public constructor() { 
    }
    public withCronConfigs(cronConfigs: Array<CronConfig>): TacticsConfig {
        this['cron_configs'] = cronConfigs;
        return this;
    }
    public set cronConfigs(cronConfigs: Array<CronConfig>  | undefined) {
        this['cron_configs'] = cronConfigs;
    }
    public get cronConfigs(): Array<CronConfig> | undefined {
        return this['cron_configs'];
    }
    public withMetricConfigs(metricConfigs: Array<MetricConfig>): TacticsConfig {
        this['metric_configs'] = metricConfigs;
        return this;
    }
    public set metricConfigs(metricConfigs: Array<MetricConfig>  | undefined) {
        this['metric_configs'] = metricConfigs;
    }
    public get metricConfigs(): Array<MetricConfig> | undefined {
        return this['metric_configs'];
    }
}