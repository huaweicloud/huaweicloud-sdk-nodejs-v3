import { MixParam } from './MixParam';
import { RecordParam } from './RecordParam';


export class MixJobReq {
    private 'mix_param'?: MixParam;
    private 'record_param'?: RecordParam;
    public constructor(mixParam?: MixParam) { 
        this['mix_param'] = mixParam;
    }
    public withMixParam(mixParam: MixParam): MixJobReq {
        this['mix_param'] = mixParam;
        return this;
    }
    public set mixParam(mixParam: MixParam  | undefined) {
        this['mix_param'] = mixParam;
    }
    public get mixParam(): MixParam | undefined {
        return this['mix_param'];
    }
    public withRecordParam(recordParam: RecordParam): MixJobReq {
        this['record_param'] = recordParam;
        return this;
    }
    public set recordParam(recordParam: RecordParam  | undefined) {
        this['record_param'] = recordParam;
    }
    public get recordParam(): RecordParam | undefined {
        return this['record_param'];
    }
}