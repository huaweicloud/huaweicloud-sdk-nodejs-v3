

export class Common {
    private 'PVC'?: boolean;
    private 'hls_interval'?: number;
    private 'dash_interval'?: number;
    private 'pack_type'?: number;
    public constructor(packType?: number) { 
        this['pack_type'] = packType;
    }
    public withPvc(pvc: boolean): Common {
        this['PVC'] = pvc;
        return this;
    }
    public set pvc(pvc: boolean  | undefined) {
        this['PVC'] = pvc;
    }
    public get pvc(): boolean | undefined {
        return this['PVC'];
    }
    public withHlsInterval(hlsInterval: number): Common {
        this['hls_interval'] = hlsInterval;
        return this;
    }
    public set hlsInterval(hlsInterval: number  | undefined) {
        this['hls_interval'] = hlsInterval;
    }
    public get hlsInterval(): number | undefined {
        return this['hls_interval'];
    }
    public withDashInterval(dashInterval: number): Common {
        this['dash_interval'] = dashInterval;
        return this;
    }
    public set dashInterval(dashInterval: number  | undefined) {
        this['dash_interval'] = dashInterval;
    }
    public get dashInterval(): number | undefined {
        return this['dash_interval'];
    }
    public withPackType(packType: number): Common {
        this['pack_type'] = packType;
        return this;
    }
    public set packType(packType: number  | undefined) {
        this['pack_type'] = packType;
    }
    public get packType(): number | undefined {
        return this['pack_type'];
    }
}