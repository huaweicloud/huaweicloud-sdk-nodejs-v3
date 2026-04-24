

export class SupportLinkInfo {
    private 'engine_type'?: string;
    private 'net_type'?: string;
    private 'task_modes'?: Array<string>;
    private 'job_direction'?: string;
    private 'cluster_mode'?: string;
    private 'job_instance_type'?: string;
    private 'is_support_bind_eip'?: boolean;
    public constructor() { 
    }
    public withEngineType(engineType: string): SupportLinkInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withNetType(netType: string): SupportLinkInfo {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): string | undefined {
        return this['net_type'];
    }
    public withTaskModes(taskModes: Array<string>): SupportLinkInfo {
        this['task_modes'] = taskModes;
        return this;
    }
    public set taskModes(taskModes: Array<string>  | undefined) {
        this['task_modes'] = taskModes;
    }
    public get taskModes(): Array<string> | undefined {
        return this['task_modes'];
    }
    public withJobDirection(jobDirection: string): SupportLinkInfo {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): string | undefined {
        return this['job_direction'];
    }
    public withClusterMode(clusterMode: string): SupportLinkInfo {
        this['cluster_mode'] = clusterMode;
        return this;
    }
    public set clusterMode(clusterMode: string  | undefined) {
        this['cluster_mode'] = clusterMode;
    }
    public get clusterMode(): string | undefined {
        return this['cluster_mode'];
    }
    public withJobInstanceType(jobInstanceType: string): SupportLinkInfo {
        this['job_instance_type'] = jobInstanceType;
        return this;
    }
    public set jobInstanceType(jobInstanceType: string  | undefined) {
        this['job_instance_type'] = jobInstanceType;
    }
    public get jobInstanceType(): string | undefined {
        return this['job_instance_type'];
    }
    public withIsSupportBindEip(isSupportBindEip: boolean): SupportLinkInfo {
        this['is_support_bind_eip'] = isSupportBindEip;
        return this;
    }
    public set isSupportBindEip(isSupportBindEip: boolean  | undefined) {
        this['is_support_bind_eip'] = isSupportBindEip;
    }
    public get isSupportBindEip(): boolean | undefined {
        return this['is_support_bind_eip'];
    }
}