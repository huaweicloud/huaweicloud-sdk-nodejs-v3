

export class Qos {
    public networkQuality?: string;
    public codecType?: string;
    public bandWidth?: number;
    public lostPacketRate?: number;
    public delay?: number;
    public jitter?: number;
    public resolutionHeight?: number;
    public resolutionWidth?: number;
    public frameRate?: number;
    public codecUserId?: string;
    public constructor() { 
    }
    public withNetworkQuality(networkQuality: string): Qos {
        this['networkQuality'] = networkQuality;
        return this;
    }
    public withCodecType(codecType: string): Qos {
        this['codecType'] = codecType;
        return this;
    }
    public withBandWidth(bandWidth: number): Qos {
        this['bandWidth'] = bandWidth;
        return this;
    }
    public withLostPacketRate(lostPacketRate: number): Qos {
        this['lostPacketRate'] = lostPacketRate;
        return this;
    }
    public withDelay(delay: number): Qos {
        this['delay'] = delay;
        return this;
    }
    public withJitter(jitter: number): Qos {
        this['jitter'] = jitter;
        return this;
    }
    public withResolutionHeight(resolutionHeight: number): Qos {
        this['resolutionHeight'] = resolutionHeight;
        return this;
    }
    public withResolutionWidth(resolutionWidth: number): Qos {
        this['resolutionWidth'] = resolutionWidth;
        return this;
    }
    public withFrameRate(frameRate: number): Qos {
        this['frameRate'] = frameRate;
        return this;
    }
    public withCodecUserId(codecUserId: string): Qos {
        this['codecUserId'] = codecUserId;
        return this;
    }
}