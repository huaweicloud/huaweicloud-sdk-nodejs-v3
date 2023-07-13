

export class Common {
    private 'PVC'?: boolean | undefined;
    private 'hls_interval'?: number | undefined;
    private 'dash_interval'?: number | undefined;
    private 'pack_type': number | undefined;
    public constructor(packType?: any) { 
        this['pack_type'] = packType;
    }
    public withPvc(pvc: boolean): Common {
        this['PVC'] = pvc;
        return this;
    }
    public set pvc(pvc: boolean | undefined) {
        this['PVC'] = pvc;
    }
    public get pvc() {
        return this['PVC'];
    }
    public withHlsInterval(hlsInterval: number): Common {
        this['hls_interval'] = hlsInterval;
        return this;
    }
    public set hlsInterval(hlsInterval: number | undefined) {
        this['hls_interval'] = hlsInterval;
    }
    public get hlsInterval() {
        return this['hls_interval'];
    }
    public withDashInterval(dashInterval: number): Common {
        this['dash_interval'] = dashInterval;
        return this;
    }
    public set dashInterval(dashInterval: number | undefined) {
        this['dash_interval'] = dashInterval;
    }
    public get dashInterval() {
        return this['dash_interval'];
    }
    public withPackType(packType: number): Common {
        this['pack_type'] = packType;
        return this;
    }
    public set packType(packType: number | undefined) {
        this['pack_type'] = packType;
    }
    public get packType() {
        return this['pack_type'];
    }
}