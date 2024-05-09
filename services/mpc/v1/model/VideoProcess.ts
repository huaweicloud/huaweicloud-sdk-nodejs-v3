

export class VideoProcess {
    private 'hls_init_count'?: number;
    private 'hls_init_interval'?: number;
    private 'hls_storage_type'?: VideoProcessHlsStorageTypeEnum | string;
    public rotate?: number;
    public adaptation?: VideoProcessAdaptationEnum | string;
    public upsample?: number;
    private 'hls_segment_type'?: VideoProcessHlsSegmentTypeEnum | string;
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
    public withHlsStorageType(hlsStorageType: VideoProcessHlsStorageTypeEnum | string): VideoProcess {
        this['hls_storage_type'] = hlsStorageType;
        return this;
    }
    public set hlsStorageType(hlsStorageType: VideoProcessHlsStorageTypeEnum | string  | undefined) {
        this['hls_storage_type'] = hlsStorageType;
    }
    public get hlsStorageType(): VideoProcessHlsStorageTypeEnum | string | undefined {
        return this['hls_storage_type'];
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
    public withHlsSegmentType(hlsSegmentType: VideoProcessHlsSegmentTypeEnum | string): VideoProcess {
        this['hls_segment_type'] = hlsSegmentType;
        return this;
    }
    public set hlsSegmentType(hlsSegmentType: VideoProcessHlsSegmentTypeEnum | string  | undefined) {
        this['hls_segment_type'] = hlsSegmentType;
    }
    public get hlsSegmentType(): VideoProcessHlsSegmentTypeEnum | string | undefined {
        return this['hls_segment_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoProcessHlsStorageTypeEnum {
    COMPOSITE = 'composite',
    SEPARATE = 'separate'
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
/**
    * @export
    * @enum {string}
    */
export enum VideoProcessHlsSegmentTypeEnum {
    MPEGTS = 'mpegts',
    FMP4 = 'fmp4'
}
