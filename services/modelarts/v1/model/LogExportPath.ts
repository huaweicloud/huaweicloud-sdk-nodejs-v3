

export class LogExportPath {
    private 'obs_url'?: string;
    private 'host_path'?: string;
    public constructor() { 
    }
    public withObsUrl(obsUrl: string): LogExportPath {
        this['obs_url'] = obsUrl;
        return this;
    }
    public set obsUrl(obsUrl: string  | undefined) {
        this['obs_url'] = obsUrl;
    }
    public get obsUrl(): string | undefined {
        return this['obs_url'];
    }
    public withHostPath(hostPath: string): LogExportPath {
        this['host_path'] = hostPath;
        return this;
    }
    public set hostPath(hostPath: string  | undefined) {
        this['host_path'] = hostPath;
    }
    public get hostPath(): string | undefined {
        return this['host_path'];
    }
}