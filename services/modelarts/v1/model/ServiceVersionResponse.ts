import { GroupConfigResponse } from './GroupConfigResponse';
import { LogConfigResponse } from './LogConfigResponse';
import { RuntimeConfigResponse } from './RuntimeConfigResponse';
import { UpgradeConfigResponse } from './UpgradeConfigResponse';


export class ServiceVersionResponse {
    public id?: string;
    public version?: string;
    public description?: string;
    private 'predict_url'?: string;
    private 'runtime_config'?: RuntimeConfigResponse;
    private 'upgrade_config'?: UpgradeConfigResponse;
    private 'instance_groups'?: Array<GroupConfigResponse>;
    private 'lts_strategy'?: string;
    private 'lts_status'?: string;
    private 'lts_event_status'?: string;
    private 'log_configs'?: Array<LogConfigResponse>;
    private 'deploy_timeout_minutes'?: number;
    public constructor() { 
    }
    public withId(id: string): ServiceVersionResponse {
        this['id'] = id;
        return this;
    }
    public withVersion(version: string): ServiceVersionResponse {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): ServiceVersionResponse {
        this['description'] = description;
        return this;
    }
    public withPredictUrl(predictUrl: string): ServiceVersionResponse {
        this['predict_url'] = predictUrl;
        return this;
    }
    public set predictUrl(predictUrl: string  | undefined) {
        this['predict_url'] = predictUrl;
    }
    public get predictUrl(): string | undefined {
        return this['predict_url'];
    }
    public withRuntimeConfig(runtimeConfig: RuntimeConfigResponse): ServiceVersionResponse {
        this['runtime_config'] = runtimeConfig;
        return this;
    }
    public set runtimeConfig(runtimeConfig: RuntimeConfigResponse  | undefined) {
        this['runtime_config'] = runtimeConfig;
    }
    public get runtimeConfig(): RuntimeConfigResponse | undefined {
        return this['runtime_config'];
    }
    public withUpgradeConfig(upgradeConfig: UpgradeConfigResponse): ServiceVersionResponse {
        this['upgrade_config'] = upgradeConfig;
        return this;
    }
    public set upgradeConfig(upgradeConfig: UpgradeConfigResponse  | undefined) {
        this['upgrade_config'] = upgradeConfig;
    }
    public get upgradeConfig(): UpgradeConfigResponse | undefined {
        return this['upgrade_config'];
    }
    public withInstanceGroups(instanceGroups: Array<GroupConfigResponse>): ServiceVersionResponse {
        this['instance_groups'] = instanceGroups;
        return this;
    }
    public set instanceGroups(instanceGroups: Array<GroupConfigResponse>  | undefined) {
        this['instance_groups'] = instanceGroups;
    }
    public get instanceGroups(): Array<GroupConfigResponse> | undefined {
        return this['instance_groups'];
    }
    public withLtsStrategy(ltsStrategy: string): ServiceVersionResponse {
        this['lts_strategy'] = ltsStrategy;
        return this;
    }
    public set ltsStrategy(ltsStrategy: string  | undefined) {
        this['lts_strategy'] = ltsStrategy;
    }
    public get ltsStrategy(): string | undefined {
        return this['lts_strategy'];
    }
    public withLtsStatus(ltsStatus: string): ServiceVersionResponse {
        this['lts_status'] = ltsStatus;
        return this;
    }
    public set ltsStatus(ltsStatus: string  | undefined) {
        this['lts_status'] = ltsStatus;
    }
    public get ltsStatus(): string | undefined {
        return this['lts_status'];
    }
    public withLtsEventStatus(ltsEventStatus: string): ServiceVersionResponse {
        this['lts_event_status'] = ltsEventStatus;
        return this;
    }
    public set ltsEventStatus(ltsEventStatus: string  | undefined) {
        this['lts_event_status'] = ltsEventStatus;
    }
    public get ltsEventStatus(): string | undefined {
        return this['lts_event_status'];
    }
    public withLogConfigs(logConfigs: Array<LogConfigResponse>): ServiceVersionResponse {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<LogConfigResponse>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<LogConfigResponse> | undefined {
        return this['log_configs'];
    }
    public withDeployTimeoutMinutes(deployTimeoutMinutes: number): ServiceVersionResponse {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
        return this;
    }
    public set deployTimeoutMinutes(deployTimeoutMinutes: number  | undefined) {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
    }
    public get deployTimeoutMinutes(): number | undefined {
        return this['deploy_timeout_minutes'];
    }
}