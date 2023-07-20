

export class VideoProcess {
    private 'hls_init_count'?: number;
    private 'hls_init_interval'?: number;
    public rotate?: number;
    public adaptation?: VideoProcessAdaptationEnum | string;
    public upsample?: number;
    public constructor() { 
    }
    public withHlsInitCount(hlsInitCount: number): VideoProcess {
        this['hls_init_count'] = hlsInitCount;
        return this;
    }
    public set hlsInitCount(hlsInitCount: number  | undefined) {
        this['hls_init_count'] = hlsInitCount;
    }
    public get hlsInitCount(): number | undefined {
        return this['hls_init_count'];
    }
    public withHlsInitInterval(hlsInitInterval: number): VideoProcess {
        this['hls_init_interval'] = hlsInitInterval;
        return this;
    }
    public set hlsInitInterval(hlsInitInterval: number  | undefined) {
        this['hls_init_interval'] = hlsInitInterval;
    }
    public get hlsInitInterval(): number | undefined {
        return this['hls_init_interval'];
    }
    public withRotate(rotate: number): VideoProcess {
        this['rotate'] = rotate;
        return this;
    }
    public withAdaptation(adaptation: VideoProcessAdaptationEnum | string): VideoProcess {
        this['adaptation'] = adaptation;
        return this;
    }
    public withUpsample(upsample: number): VideoProcess {
        this['upsample'] = upsample;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoProcessAdaptationEnum {
    SHORT = 'SHORT',
    LONG = 'LONG',
    NONE = 'NONE'
}
