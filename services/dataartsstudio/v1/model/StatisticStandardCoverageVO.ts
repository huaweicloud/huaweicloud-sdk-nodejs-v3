import { AllTableVO } from './AllTableVO';


export class StatisticStandardCoverageVO {
    private 'all_col_num'?: string;
    private 'col_num'?: string;
    public coverage?: number;
    public details?: Array<AllTableVO>;
    public constructor() { 
    }
    public withAllColNum(allColNum: string): StatisticStandardCoverageVO {
        this['all_col_num'] = allColNum;
        return this;
    }
    public set allColNum(allColNum: string  | undefined) {
        this['all_col_num'] = allColNum;
    }
    public get allColNum(): string | undefined {
        return this['all_col_num'];
    }
    public withColNum(colNum: string): StatisticStandardCoverageVO {
        this['col_num'] = colNum;
        return this;
    }
    public set colNum(colNum: string  | undefined) {
        this['col_num'] = colNum;
    }
    public get colNum(): string | undefined {
        return this['col_num'];
    }
    public withCoverage(coverage: number): StatisticStandardCoverageVO {
        this['coverage'] = coverage;
        return this;
    }
    public withDetails(details: Array<AllTableVO>): StatisticStandardCoverageVO {
        this['details'] = details;
        return this;
    }
}