

export class TaskLogExportPath {
    private 'obs_url'?: string;
    public constructor() { 
    }
    public withObsUrl(obsUrl: string): TaskLogExportPath {
        this['obs_url'] = obsUrl;
        return this;
    }
    public set obsUrl(obsUrl: string  | undefined) {
        this['obs_url'] = obsUrl;
    }
    public get obsUrl(): string | undefined {
        return this['obs_url'];
    }
}