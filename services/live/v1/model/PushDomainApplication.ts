

export class PushDomainApplication {
    public name?: string;
    private 'hls_fragment'?: number;
    private 'hls_ts_count'?: number;
    private 'hls_min_frags'?: number;
    public constructor() { 
    }
    public withName(name: string): PushDomainApplication {
        this['name'] = name;
        return this;
    }
    public withHlsFragment(hlsFragment: number): PushDomainApplication {
        this['hls_fragment'] = hlsFragment;
        return this;
    }
    public set hlsFragment(hlsFragment: number  | undefined) {
        this['hls_fragment'] = hlsFragment;
    }
    public get hlsFragment(): number | undefined {
        return this['hls_fragment'];
    }
    public withHlsTsCount(hlsTsCount: number): PushDomainApplication {
        this['hls_ts_count'] = hlsTsCount;
        return this;
    }
    public set hlsTsCount(hlsTsCount: number  | undefined) {
        this['hls_ts_count'] = hlsTsCount;
    }
    public get hlsTsCount(): number | undefined {
        return this['hls_ts_count'];
    }
    public withHlsMinFrags(hlsMinFrags: number): PushDomainApplication {
        this['hls_min_frags'] = hlsMinFrags;
        return this;
    }
    public set hlsMinFrags(hlsMinFrags: number  | undefined) {
        this['hls_min_frags'] = hlsMinFrags;
    }
    public get hlsMinFrags(): number | undefined {
        return this['hls_min_frags'];
    }
}