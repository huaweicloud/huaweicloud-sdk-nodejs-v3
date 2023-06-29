

export class VideoProcess {
    private 'hls_init_count'?: number | undefined;
    private 'hls_init_interval'?: number | undefined;
    public rotate?: number;
    public adaptation?: VideoProcessAdaptationEnum;
    public upsample?: number;
    public constructor() { 
    }
    public withHlsInitCount(hlsInitCount: number): VideoProcess {
        this['hls_init_count'] = hlsInitCount;
        return this;
    }
    public set hlsInitCount(hlsInitCount: number | undefined) {
        this['hls_init_count'] = hlsInitCount;
    }
    public get hlsInitCount() {
        return this['hls_init_count'];
    }
    public withHlsInitInterval(hlsInitInterval: number): VideoProcess {
        this['hls_init_interval'] = hlsInitInterval;
        return this;
    }
    public set hlsInitInterval(hlsInitInterval: number | undefined) {
        this['hls_init_interval'] = hlsInitInterval;
    }
    public get hlsInitInterval() {
        return this['hls_init_interval'];
    }
    public withRotate(rotate: number): VideoProcess {
        this['rotate'] = rotate;
        return this;
    }
    public withAdaptation(adaptation: VideoProcessAdaptationEnum): VideoProcess {
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
