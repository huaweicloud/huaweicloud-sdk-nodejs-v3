import { ConfigNasTarget } from './ConfigNasTarget';
import { ConfigObsTarget } from './ConfigObsTarget';


export class ReqUpdateHpcCacheData {
    private 'gc_time'?: number;
    private 'ck_time'?: number;
    public nas?: Array<ConfigNasTarget>;
    public obs?: Array<ConfigObsTarget>;
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
    public withObs(obs: Array<ConfigObsTarget>): ReqUpdateHpcCacheData {
        this['obs'] = obs;
        return this;
    }
}