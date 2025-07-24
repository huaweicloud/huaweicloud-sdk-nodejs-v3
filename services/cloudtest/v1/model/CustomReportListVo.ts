import { ReportChartDataVo } from './ReportChartDataVo';
import { ReportFilter } from './ReportFilter';


export class CustomReportListVo {
    public id?: string;
    public name?: string;
    public filter?: ReportFilter;
    private 'workpiece_type'?: string;
    private 'analysis_dimension'?: string;
    private 'compare_dimension'?: string;
    private 'chart_data'?: Array<ReportChartDataVo>;
    public constructor() { 
    }
    public withId(id: string): CustomReportListVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CustomReportListVo {
        this['name'] = name;
        return this;
    }
    public withFilter(filter: ReportFilter): CustomReportListVo {
        this['filter'] = filter;
        return this;
    }
    public withWorkpieceType(workpieceType: string): CustomReportListVo {
        this['workpiece_type'] = workpieceType;
        return this;
    }
    public set workpieceType(workpieceType: string  | undefined) {
        this['workpiece_type'] = workpieceType;
    }
    public get workpieceType(): string | undefined {
        return this['workpiece_type'];
    }
    public withAnalysisDimension(analysisDimension: string): CustomReportListVo {
        this['analysis_dimension'] = analysisDimension;
        return this;
    }
    public set analysisDimension(analysisDimension: string  | undefined) {
        this['analysis_dimension'] = analysisDimension;
    }
    public get analysisDimension(): string | undefined {
        return this['analysis_dimension'];
    }
    public withCompareDimension(compareDimension: string): CustomReportListVo {
        this['compare_dimension'] = compareDimension;
        return this;
    }
    public set compareDimension(compareDimension: string  | undefined) {
        this['compare_dimension'] = compareDimension;
    }
    public get compareDimension(): string | undefined {
        return this['compare_dimension'];
    }
    public withChartData(chartData: Array<ReportChartDataVo>): CustomReportListVo {
        this['chart_data'] = chartData;
        return this;
    }
    public set chartData(chartData: Array<ReportChartDataVo>  | undefined) {
        this['chart_data'] = chartData;
    }
    public get chartData(): Array<ReportChartDataVo> | undefined {
        return this['chart_data'];
    }
}