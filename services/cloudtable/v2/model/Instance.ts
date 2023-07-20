import { Nics } from './Nics';


export class Instance {
    private 'availability_zone'?: string;
    private 'cu_num'?: number;
    private 'lemon_num'?: number;
    public nics?: Array<Nics>;
    private 'tsd_num'?: number;
    public constructor(availabilityZone?: string, cuNum?: number, nics?: Array<Nics>, tsdNum?: number) { 
        this['availability_zone'] = availabilityZone;
        this['cu_num'] = cuNum;
        this['nics'] = nics;
        this['tsd_num'] = tsdNum;
    }
    public withAvailabilityZone(availabilityZone: string): Instance {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withCuNum(cuNum: number): Instance {
        this['cu_num'] = cuNum;
        return this;
    }
    public set cuNum(cuNum: number  | undefined) {
        this['cu_num'] = cuNum;
    }
    public get cuNum(): number | undefined {
        return this['cu_num'];
    }
    public withLemonNum(lemonNum: number): Instance {
        this['lemon_num'] = lemonNum;
        return this;
    }
    public set lemonNum(lemonNum: number  | undefined) {
        this['lemon_num'] = lemonNum;
    }
    public get lemonNum(): number | undefined {
        return this['lemon_num'];
    }
    public withNics(nics: Array<Nics>): Instance {
        this['nics'] = nics;
        return this;
    }
    public withTsdNum(tsdNum: number): Instance {
        this['tsd_num'] = tsdNum;
        return this;
    }
    public set tsdNum(tsdNum: number  | undefined) {
        this['tsd_num'] = tsdNum;
    }
    public get tsdNum(): number | undefined {
        return this['tsd_num'];
    }
}