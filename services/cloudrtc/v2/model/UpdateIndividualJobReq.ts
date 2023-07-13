import { PublishParam } from './PublishParam';
import { RecordParam } from './RecordParam';


export class UpdateIndividualJobReq {
    private 'publish_param'?: PublishParam | undefined;
    private 'record_param'?: RecordParam | undefined;
    public constructor() { 
    }
    public withPublishParam(publishParam: PublishParam): UpdateIndividualJobReq {
        this['publish_param'] = publishParam;
        return this;
    }
    public set publishParam(publishParam: PublishParam | undefined) {
        this['publish_param'] = publishParam;
    }
    public get publishParam() {
        return this['publish_param'];
    }
    public withRecordParam(recordParam: RecordParam): UpdateIndividualJobReq {
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