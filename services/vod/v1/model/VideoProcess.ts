

export class VideoProcess {
    private 'hls_init_count'?: number;
    private 'hls_init_interval'?: number;
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
}