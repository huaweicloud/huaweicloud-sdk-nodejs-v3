import { FuseConfig } from './FuseConfig';


export class ServiceInvokeResponse {
    public port?: number;
    public protocol?: string;
    private 'auth_type'?: string;
    private 'internet_access_enable'?: boolean;
    private 'intranet_approval_enable'?: boolean;
    private 'dynamic_routing_enable'?: boolean;
    public strategy?: string;
    private 'metric_api_scheme'?: string;
    private 'metric_api_port'?: string;
    private 'metric_api_path'?: string;
    private 'ems_enable'?: boolean;
    private 'request_retry_enable'?: boolean;
    private 'request_retry_cnt_max'?: number;
    private 'request_retry_interval_ms'?: number;
    private 'fuse_configs'?: FuseConfig;
    public constructor(port?: number, protocol?: string, authType?: string) { 
        this['port'] = port;
        this['protocol'] = protocol;
        this['auth_type'] = authType;
    }
    public withPort(port: number): ServiceInvokeResponse {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: string): ServiceInvokeResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withAuthType(authType: string): ServiceInvokeResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withInternetAccessEnable(internetAccessEnable: boolean): ServiceInvokeResponse {
        this['internet_access_enable'] = internetAccessEnable;
        return this;
    }
    public set internetAccessEnable(internetAccessEnable: boolean  | undefined) {
        this['internet_access_enable'] = internetAccessEnable;
    }
    public get internetAccessEnable(): boolean | undefined {
        return this['internet_access_enable'];
    }
    public withIntranetApprovalEnable(intranetApprovalEnable: boolean): ServiceInvokeResponse {
        this['intranet_approval_enable'] = intranetApprovalEnable;
        return this;
    }
    public set intranetApprovalEnable(intranetApprovalEnable: boolean  | undefined) {
        this['intranet_approval_enable'] = intranetApprovalEnable;
    }
    public get intranetApprovalEnable(): boolean | undefined {
        return this['intranet_approval_enable'];
    }
    public withDynamicRoutingEnable(dynamicRoutingEnable: boolean): ServiceInvokeResponse {
        this['dynamic_routing_enable'] = dynamicRoutingEnable;
        return this;
    }
    public set dynamicRoutingEnable(dynamicRoutingEnable: boolean  | undefined) {
        this['dynamic_routing_enable'] = dynamicRoutingEnable;
    }
    public get dynamicRoutingEnable(): boolean | undefined {
        return this['dynamic_routing_enable'];
    }
    public withStrategy(strategy: string): ServiceInvokeResponse {
        this['strategy'] = strategy;
        return this;
    }
    public withMetricApiScheme(metricApiScheme: string): ServiceInvokeResponse {
        this['metric_api_scheme'] = metricApiScheme;
        return this;
    }
    public set metricApiScheme(metricApiScheme: string  | undefined) {
        this['metric_api_scheme'] = metricApiScheme;
    }
    public get metricApiScheme(): string | undefined {
        return this['metric_api_scheme'];
    }
    public withMetricApiPort(metricApiPort: string): ServiceInvokeResponse {
        this['metric_api_port'] = metricApiPort;
        return this;
    }
    public set metricApiPort(metricApiPort: string  | undefined) {
        this['metric_api_port'] = metricApiPort;
    }
    public get metricApiPort(): string | undefined {
        return this['metric_api_port'];
    }
    public withMetricApiPath(metricApiPath: string): ServiceInvokeResponse {
        this['metric_api_path'] = metricApiPath;
        return this;
    }
    public set metricApiPath(metricApiPath: string  | undefined) {
        this['metric_api_path'] = metricApiPath;
    }
    public get metricApiPath(): string | undefined {
        return this['metric_api_path'];
    }
    public withEmsEnable(emsEnable: boolean): ServiceInvokeResponse {
        this['ems_enable'] = emsEnable;
        return this;
    }
    public set emsEnable(emsEnable: boolean  | undefined) {
        this['ems_enable'] = emsEnable;
    }
    public get emsEnable(): boolean | undefined {
        return this['ems_enable'];
    }
    public withRequestRetryEnable(requestRetryEnable: boolean): ServiceInvokeResponse {
        this['request_retry_enable'] = requestRetryEnable;
        return this;
    }
    public set requestRetryEnable(requestRetryEnable: boolean  | undefined) {
        this['request_retry_enable'] = requestRetryEnable;
    }
    public get requestRetryEnable(): boolean | undefined {
        return this['request_retry_enable'];
    }
    public withRequestRetryCntMax(requestRetryCntMax: number): ServiceInvokeResponse {
        this['request_retry_cnt_max'] = requestRetryCntMax;
        return this;
    }
    public set requestRetryCntMax(requestRetryCntMax: number  | undefined) {
        this['request_retry_cnt_max'] = requestRetryCntMax;
    }
    public get requestRetryCntMax(): number | undefined {
        return this['request_retry_cnt_max'];
    }
    public withRequestRetryIntervalMs(requestRetryIntervalMs: number): ServiceInvokeResponse {
        this['request_retry_interval_ms'] = requestRetryIntervalMs;
        return this;
    }
    public set requestRetryIntervalMs(requestRetryIntervalMs: number  | undefined) {
        this['request_retry_interval_ms'] = requestRetryIntervalMs;
    }
    public get requestRetryIntervalMs(): number | undefined {
        return this['request_retry_interval_ms'];
    }
    public withFuseConfigs(fuseConfigs: FuseConfig): ServiceInvokeResponse {
        this['fuse_configs'] = fuseConfigs;
        return this;
    }
    public set fuseConfigs(fuseConfigs: FuseConfig  | undefined) {
        this['fuse_configs'] = fuseConfigs;
    }
    public get fuseConfigs(): FuseConfig | undefined {
        return this['fuse_configs'];
    }
}