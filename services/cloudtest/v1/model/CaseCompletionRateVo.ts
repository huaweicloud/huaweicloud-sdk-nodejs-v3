import { NameAndValueVo } from './NameAndValueVo';


export class CaseCompletionRateVo {
    public total?: number;
    private 'completion_rate'?: string;
    private 'status_number_list'?: Array<NameAndValueVo>;
    public constructor() { 
    }
    public withTotal(total: number): CaseCompletionRateVo {
        this['total'] = total;
        return this;
    }
    public withCompletionRate(completionRate: string): CaseCompletionRateVo {
        this['completion_rate'] = completionRate;
        return this;
    }
    public set completionRate(completionRate: string  | undefined) {
        this['completion_rate'] = completionRate;
    }
    public get completionRate(): string | undefined {
        return this['completion_rate'];
    }
    public withStatusNumberList(statusNumberList: Array<NameAndValueVo>): CaseCompletionRateVo {
        this['status_number_list'] = statusNumberList;
        return this;
    }
    public set statusNumberList(statusNumberList: Array<NameAndValueVo>  | undefined) {
        this['status_number_list'] = statusNumberList;
    }
    public get statusNumberList(): Array<NameAndValueVo> | undefined {
        return this['status_number_list'];
    }
}