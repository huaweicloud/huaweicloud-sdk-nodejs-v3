import { DynamicConfigInfo } from './DynamicConfigInfo';


export class EnvExecutionBody {
    public params?: Array<DynamicConfigInfo>;
    private 'record_id'?: string | undefined;
    private 'trigger_source'?: string | undefined;
    public constructor() { 
    }
    public withParams(params: Array<DynamicConfigInfo>): EnvExecutionBody {
        this['params'] = params;
        return this;
    }
    public withRecordId(recordId: string): EnvExecutionBody {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId() {
        return this['record_id'];
    }
    public withTriggerSource(triggerSource: string): EnvExecutionBody {
        this['trigger_source'] = triggerSource;
        return this;
    }
    public set triggerSource(triggerSource: string | undefined) {
        this['trigger_source'] = triggerSource;
    }
    public get triggerSource() {
        return this['trigger_source'];
    }
}