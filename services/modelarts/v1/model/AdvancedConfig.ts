import { ServiceSecret } from './ServiceSecret';
import { UpgradeConfig } from './UpgradeConfig';


export class AdvancedConfig {
    private 'deploy_timeout_minutes'?: string;
    private 'upgrade_config'?: UpgradeConfig;
    private 'service_secret'?: ServiceSecret;
    private 'dynamic_routing_enable'?: boolean;
    public strategy?: string;
    private 'ems_enable'?: boolean;
    private 'metric_api_scheme'?: string;
    private 'metric_api_port'?: string;
    private 'metric_api_path'?: string;
    private 'custom_metrics_path'?: string;
    public port?: number;
    public protocol?: string;
    public constructor(upgradeConfig?: UpgradeConfig, port?: number, protocol?: string) { 
        this['upgrade_config'] = upgradeConfig;
        this['port'] = port;
        this['protocol'] = protocol;
    }
    public withDeployTimeoutMinutes(deployTimeoutMinutes: string): AdvancedConfig {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
        return this;
    }
    public set deployTimeoutMinutes(deployTimeoutMinutes: string  | undefined) {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
    }
    public get deployTimeoutMinutes(): string | undefined {
        return this['deploy_timeout_minutes'];
    }
    public withUpgradeConfig(upgradeConfig: UpgradeConfig): AdvancedConfig {
        this['upgrade_config'] = upgradeConfig;
        return this;
    }
    public set upgradeConfig(upgradeConfig: UpgradeConfig  | undefined) {
        this['upgrade_config'] = upgradeConfig;
    }
    public get upgradeConfig(): UpgradeConfig | undefined {
        return this['upgrade_config'];
    }
    public withServiceSecret(serviceSecret: ServiceSecret): AdvancedConfig {
        this['service_secret'] = serviceSecret;
        return this;
    }
    public set serviceSecret(serviceSecret: ServiceSecret  | undefined) {
        this['service_secret'] = serviceSecret;
    }
    public get serviceSecret(): ServiceSecret | undefined {
        return this['service_secret'];
    }
    public withDynamicRoutingEnable(dynamicRoutingEnable: boolean): AdvancedConfig {
        this['dynamic_routing_enable'] = dynamicRoutingEnable;
        return this;
    }
    public set dynamicRoutingEnable(dynamicRoutingEnable: boolean  | undefined) {
        this['dynamic_routing_enable'] = dynamicRoutingEnable;
    }
    public get dynamicRoutingEnable(): boolean | undefined {
        return this['dynamic_routing_enable'];
    }
    public withStrategy(strategy: string): AdvancedConfig {
        this['strategy'] = strategy;
        return this;
    }
    public withEmsEnable(emsEnable: boolean): AdvancedConfig {
        this['ems_enable'] = emsEnable;
        return this;
    }
    public set emsEnable(emsEnable: boolean  | undefined) {
        this['ems_enable'] = emsEnable;
    }
    public get emsEnable(): boolean | undefined {
        return this['ems_enable'];
    }
    public withMetricApiScheme(metricApiScheme: string): AdvancedConfig {
        this['metric_api_scheme'] = metricApiScheme;
        return this;
    }
    public set metricApiScheme(metricApiScheme: string  | undefined) {
        this['metric_api_scheme'] = metricApiScheme;
    }
    public get metricApiScheme(): string | undefined {
        return this['metric_api_scheme'];
    }
    public withMetricApiPort(metricApiPort: string): AdvancedConfig {
        this['metric_api_port'] = metricApiPort;
        return this;
    }
    public set metricApiPort(metricApiPort: string  | undefined) {
        this['metric_api_port'] = metricApiPort;
    }
    public get metricApiPort(): string | undefined {
        return this['metric_api_port'];
    }
    public withMetricApiPath(metricApiPath: string): AdvancedConfig {
        this['metric_api_path'] = metricApiPath;
        return this;
    }
    public set metricApiPath(metricApiPath: string  | undefined) {
        this['metric_api_path'] = metricApiPath;
    }
    public get metricApiPath(): string | undefined {
        return this['metric_api_path'];
    }
    public withCustomMetricsPath(customMetricsPath: string): AdvancedConfig {
        this['custom_metrics_path'] = customMetricsPath;
        return this;
    }
    public set customMetricsPath(customMetricsPath: string  | undefined) {
        this['custom_metrics_path'] = customMetricsPath;
    }
    public get customMetricsPath(): string | undefined {
        return this['custom_metrics_path'];
    }
    public withPort(port: number): AdvancedConfig {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: string): AdvancedConfig {
        this['protocol'] = protocol;
        return this;
    }
}