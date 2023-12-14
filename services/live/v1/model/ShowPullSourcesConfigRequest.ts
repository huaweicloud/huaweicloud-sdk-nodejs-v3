

export class ShowPullSourcesConfigRequest {
    private 'play_domain'?: string;
    public constructor(playDomain?: string) { 
        this['play_domain'] = playDomain;
    }
    public withPlayDomain(playDomain: string): ShowPullSourcesConfigRequest {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
}