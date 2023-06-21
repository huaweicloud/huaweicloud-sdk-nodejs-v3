import { MixParam } from './MixParam';
import { PublishParam } from './PublishParam';
import { RecordParam } from './RecordParam';


export class MixJobReq {
    private 'mix_param': MixParam | undefined;
    private 'publish_param'?: PublishParam | undefined;
    private 'record_param'?: RecordParam | undefined;
    public constructor(mixParam?: any) { 
        this['mix_param'] = mixParam;
    }
    public withMixParam(mixParam: MixParam): MixJobReq {
        this['mix_param'] = mixParam;
        return this;
    }
    public set mixParam(mixParam: MixParam | undefined) {
        this['mix_param'] = mixParam;
    }
    public get mixParam() {
        return this['mix_param'];
    }
    public withPublishParam(publishParam: PublishParam): MixJobReq {
        this['publish_param'] = publishParam;
        return this;
    }
    public set publishParam(publishParam: PublishParam | undefined) {
        this['publish_param'] = publishParam;
    }
    public get publishParam() {
        return this['publish_param'];
    }
    public withRecordParam(recordParam: RecordParam): MixJobReq {
        this['record_param'] = recordParam;
        return this;
    }
    public set recordParam(recordParam: RecordParam | undefined) {
        this['record_param'] = recordParam;
    }
    public get recordParam() {
        return this['record_param'];
    }
}