import { AiOpsRiskObject } from './AiOpsRiskObject';
import { SummaryInfo } from './SummaryInfo';


export class AiOps {
    public id?: string;
    private 'check_type'?: string;
    private 'trigger_type'?: string;
    public name?: string;
    public desc?: string;
    public status?: number;
    public summary?: SummaryInfo;
    private 'task_risks'?: Array<AiOpsRiskObject>;
    public constructor() { 
    }
    public withId(id: string): AiOps {
        this['id'] = id;
        return this;
    }
    public withCheckType(checkType: string): AiOps {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withTriggerType(triggerType: string): AiOps {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withName(name: string): AiOps {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): AiOps {
        this['desc'] = desc;
        return this;
    }
    public withStatus(status: number): AiOps {
        this['status'] = status;
        return this;
    }
    public withSummary(summary: SummaryInfo): AiOps {
        this['summary'] = summary;
        return this;
    }
    public withTaskRisks(taskRisks: Array<AiOpsRiskObject>): AiOps {
        this['task_risks'] = taskRisks;
        return this;
    }
    public set taskRisks(taskRisks: Array<AiOpsRiskObject>  | undefined) {
        this['task_risks'] = taskRisks;
    }
    public get taskRisks(): Array<AiOpsRiskObject> | undefined {
        return this['task_risks'];
    }
}