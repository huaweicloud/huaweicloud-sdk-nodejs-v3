

export class PlayDomainStreamInfo {
    private 'play_domain'?: string;
    public stream?: string;
    public protocol?: string;
    public bandwidth?: number;
    public online?: number;
    public constructor() { 
    }
    public withPlayDomain(playDomain: string): PlayDomainStreamInfo {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withStream(stream: string): PlayDomainStreamInfo {
        this['stream'] = stream;
        return this;
    }
    public withProtocol(protocol: string): PlayDomainStreamInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withBandwidth(bandwidth: number): PlayDomainStreamInfo {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withOnline(online: number): PlayDomainStreamInfo {
        this['online'] = online;
        return this;
    }
}