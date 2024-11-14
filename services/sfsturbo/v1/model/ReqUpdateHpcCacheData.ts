import { ConfigNasTarget } from './ConfigNasTarget';


export class ReqUpdateHpcCacheData {
    private 'gc_time'?: number;
    private 'ck_time'?: number;
    public nas?: Array<ConfigNasTarget>;
    public constructor(gcTime?: number, ckTime?: number) { 
        this['gc_time'] = gcTime;
        this['ck_time'] = ckTime;
    }
    public withGcTime(gcTime: number): ReqUpdateHpcCacheData {
        this['gc_time'] = gcTime;
        return this;
    }
    public set gcTime(gcTime: number  | undefined) {
        this['gc_time'] = gcTime;
    }
    public get gcTime(): number | undefined {
        return this['gc_time'];
    }
    public withCkTime(ckTime: number): ReqUpdateHpcCacheData {
        this['ck_time'] = ckTime;
        return this;
    }
    public set ckTime(ckTime: number  | undefined) {
        this['ck_time'] = ckTime;
    }
    public get ckTime(): number | undefined {
        return this['ck_time'];
    }
    public withNas(nas: Array<ConfigNasTarget>): ReqUpdateHpcCacheData {
        this['nas'] = nas;
        return this;
    }
}