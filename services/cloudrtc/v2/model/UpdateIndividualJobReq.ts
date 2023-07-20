import { RecordParam } from './RecordParam';


export class UpdateIndividualJobReq {
    private 'record_param'?: RecordParam;
    public constructor() { 
    }
    public withRecordParam(recordParam: RecordParam): UpdateIndividualJobReq {
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