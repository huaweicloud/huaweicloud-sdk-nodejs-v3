import { ReportDimVo } from './ReportDimVo';


export class ReportChartDataVo {
    public id?: string;
    public name?: string;
    private 'analyze_dim'?: ReportDimVo;
    private 'compare_dim'?: Array<ReportDimVo>;
    public constructor() { 
    }
    public withId(id: string): ReportChartDataVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ReportChartDataVo {
        this['name'] = name;
        return this;
    }
    public withAnalyzeDim(analyzeDim: ReportDimVo): ReportChartDataVo {
        this['analyze_dim'] = analyzeDim;
        return this;
    }
    public set analyzeDim(analyzeDim: ReportDimVo  | undefined) {
        this['analyze_dim'] = analyzeDim;
    }
    public get analyzeDim(): ReportDimVo | undefined {
        return this['analyze_dim'];
    }
    public withCompareDim(compareDim: Array<ReportDimVo>): ReportChartDataVo {
        this['compare_dim'] = compareDim;
        return this;
    }
    public set compareDim(compareDim: Array<ReportDimVo>  | undefined) {
        this['compare_dim'] = compareDim;
    }
    public get compareDim(): Array<ReportDimVo> | undefined {
        return this['compare_dim'];
    }
}