

export class ComponentLogs {
    private 'log_path'?: string;
    public rotate?: string;
    private 'host_path'?: string;
    private 'host_extend_path'?: ComponentLogsHostExtendPathEnum | string;
    public constructor(logPath?: string, rotate?: string, hostPath?: string, hostExtendPath?: string) { 
        this['log_path'] = logPath;
        this['rotate'] = rotate;
        this['host_path'] = hostPath;
        this['host_extend_path'] = hostExtendPath;
    }
    public withLogPath(logPath: string): ComponentLogs {
        this['log_path'] = logPath;
        return this;
    }
    public set logPath(logPath: string  | undefined) {
        this['log_path'] = logPath;
    }
    public get logPath(): string | undefined {
        return this['log_path'];
    }
    public withRotate(rotate: string): ComponentLogs {
        this['rotate'] = rotate;
        return this;
    }
    public withHostPath(hostPath: string): ComponentLogs {
        this['host_path'] = hostPath;
        return this;
    }
    public set hostPath(hostPath: string  | undefined) {
        this['host_path'] = hostPath;
    }
    public get hostPath(): string | undefined {
        return this['host_path'];
    }
    public withHostExtendPath(hostExtendPath: ComponentLogsHostExtendPathEnum | string): ComponentLogs {
        this['host_extend_path'] = hostExtendPath;
        return this;
    }
    public set hostExtendPath(hostExtendPath: ComponentLogsHostExtendPathEnum | string  | undefined) {
        this['host_extend_path'] = hostExtendPath;
    }
    public get hostExtendPath(): ComponentLogsHostExtendPathEnum | string | undefined {
        return this['host_extend_path'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentLogsHostExtendPathEnum {
    NONE = 'None',
    PODUID = 'PodUID',
    PODNAME = 'PodName',
    PODUID_CONTAINERNAME = 'PodUID/ContainerName',
    PODNAME_CONTAINERNAME = 'PodName/ContainerName'
}
