

export class ShowCertificateInfoRequest {
    private 'play_domain'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withPlayDomain(playDomain: string): ShowCertificateInfoRequest {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withOffset(offset: number): ShowCertificateInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowCertificateInfoRequest {
        this['limit'] = limit;
        return this;
    }
}