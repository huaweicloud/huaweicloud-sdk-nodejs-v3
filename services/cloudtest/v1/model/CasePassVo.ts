import { NameAndValueVo } from './NameAndValueVo';


export class CasePassVo {
    private 'pass_rate'?: string;
    private 'result_number_list'?: Array<NameAndValueVo>;
    public constructor() { 
    }
    public withPassRate(passRate: string): CasePassVo {
        this['pass_rate'] = passRate;
        return this;
    }
    public set passRate(passRate: string  | undefined) {
        this['pass_rate'] = passRate;
    }
    public get passRate(): string | undefined {
        return this['pass_rate'];
    }
    public withResultNumberList(resultNumberList: Array<NameAndValueVo>): CasePassVo {
        this['result_number_list'] = resultNumberList;
        return this;
    }
    public set resultNumberList(resultNumberList: Array<NameAndValueVo>  | undefined) {
        this['result_number_list'] = resultNumberList;
    }
    public get resultNumberList(): Array<NameAndValueVo> | undefined {
        return this['result_number_list'];
    }
}