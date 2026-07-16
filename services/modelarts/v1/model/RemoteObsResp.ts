

export class RemoteObsResp {
    private 'obs_url'?: string;
    public constructor(obsUrl?: string) { 
        this['obs_url'] = obsUrl;
    }
    public withObsUrl(obsUrl: string): RemoteObsResp {
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