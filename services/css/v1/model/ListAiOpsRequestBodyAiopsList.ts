import { AIOpsRiskInfo } from './AIOpsRiskInfo';
import { ListAiOpsRequestBodySummary } from './ListAiOpsRequestBodySummary';


export class ListAiOpsRequestBodyAiopsList {
    public id?: string;
    public name?: string;
    public desc?: string;
    public status?: number;
    public summary?: ListAiOpsRequestBodySummary;
    private 'create_time'?: string;
    private 'smn_status'?: string;
    private 'smn_fail_reason'?: string;
    private 'task_risks'?: Array<AIOpsRiskInfo>;
    public constructor() { 
    }
    public withId(id: string): ListAiOpsRequestBodyAiopsList {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAiOpsRequestBodyAiopsList {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): ListAiOpsRequestBodyAiopsList {
        this['desc'] = desc;
        return this;
    }
    public withStatus(status: number): ListAiOpsRequestBodyAiopsList {
        this['status'] = status;
        return this;
    }
    public withSummary(summary: ListAiOpsRequestBodySummary): ListAiOpsRequestBodyAiopsList {
        this['summary'] = summary;
        return this;
    }
    public withCreateTime(createTime: string): ListAiOpsRequestBodyAiopsList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withSmnStatus(smnStatus: string): ListAiOpsRequestBodyAiopsList {
        this['smn_status'] = smnStatus;
        return this;
    }
    public set smnStatus(smnStatus: string  | undefined) {
        this['smn_status'] = smnStatus;
    }
    public get smnStatus(): string | undefined {
        return this['smn_status'];
    }
    public withSmnFailReason(smnFailReason: string): ListAiOpsRequestBodyAiopsList {
        this['smn_fail_reason'] = smnFailReason;
        return this;
    }
    public set smnFailReason(smnFailReason: string  | undefined) {
        this['smn_fail_reason'] = smnFailReason;
    }
    public get smnFailReason(): string | undefined {
        return this['smn_fail_reason'];
    }
    public withTaskRisks(taskRisks: Array<AIOpsRiskInfo>): ListAiOpsRequestBodyAiopsList {
        this['task_risks'] = taskRisks;
        return this;
    }
    public set taskRisks(taskRisks: Array<AIOpsRiskInfo>  | undefined) {
        this['task_risks'] = taskRisks;
    }
    public get taskRisks(): Array<AIOpsRiskInfo> | undefined {
        return this['task_risks'];
    }
}