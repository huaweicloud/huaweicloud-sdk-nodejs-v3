import { NameAndValueVo } from './NameAndValueVo';


export class DefectVo {
    public total?: number;
    private 'not_solved'?: number;
    private 'severity_number_list'?: Array<NameAndValueVo>;
    public constructor() { 
    }
    public withTotal(total: number): DefectVo {
        this['total'] = total;
        return this;
    }
    public withNotSolved(notSolved: number): DefectVo {
        this['not_solved'] = notSolved;
        return this;
    }
    public set notSolved(notSolved: number  | undefined) {
        this['not_solved'] = notSolved;
    }
    public get notSolved(): number | undefined {
        return this['not_solved'];
    }
    public withSeverityNumberList(severityNumberList: Array<NameAndValueVo>): DefectVo {
        this['severity_number_list'] = severityNumberList;
        return this;
    }
    public set severityNumberList(severityNumberList: Array<NameAndValueVo>  | undefined) {
        this['severity_number_list'] = severityNumberList;
    }
    public get severityNumberList(): Array<NameAndValueVo> | undefined {
        return this['severity_number_list'];
    }
}