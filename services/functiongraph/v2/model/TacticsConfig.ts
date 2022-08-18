import { CronConfig } from './CronConfig';
import { MetricConfig } from './MetricConfig';


export class TacticsConfig {
    private 'cron_configs'?: Array<CronConfig> | undefined;
    private 'metric_configs'?: Array<MetricConfig> | undefined;
    public constructor() { 
    }
    public withCronConfigs(cronConfigs: Array<CronConfig>): TacticsConfig {
        this['cron_configs'] = cronConfigs;
        return this;
    }
    public set cronConfigs(cronConfigs: Array<CronConfig> | undefined) {
        this['cron_configs'] = cronConfigs;
    }
    public get cronConfigs() {
        return this['cron_configs'];
    }
    public withMetricConfigs(metricConfigs: Array<MetricConfig>): TacticsConfig {
        this['metric_configs'] = metricConfigs;
        return this;
    }
    public set metricConfigs(metricConfigs: Array<MetricConfig> | undefined) {
        this['metric_configs'] = metricConfigs;
    }
    public get metricConfigs() {
        return this['metric_configs'];
    }
}