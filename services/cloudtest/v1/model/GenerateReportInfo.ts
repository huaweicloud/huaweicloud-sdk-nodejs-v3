import { ReportFilter } from './ReportFilter';


export class GenerateReportInfo {
    public name?: string;
    private 'workpiece_type'?: string;
    private 'analysis_dim_row'?: string;
    private 'compare_dim_column'?: string;
    public filter?: ReportFilter;
    public constructor() { 
    }
    public withName(name: string): GenerateReportInfo {
        this['name'] = name;
        return this;
    }
    public withWorkpieceType(workpieceType: string): GenerateReportInfo {
        this['workpiece_type'] = workpieceType;
        return this;
    }
    public set workpieceType(workpieceType: string  | undefined) {
        this['workpiece_type'] = workpieceType;
    }
    public get workpieceType(): string | undefined {
        return this['workpiece_type'];
    }
    public withAnalysisDimRow(analysisDimRow: string): GenerateReportInfo {
        this['analysis_dim_row'] = analysisDimRow;
        return this;
    }
    public set analysisDimRow(analysisDimRow: string  | undefined) {
        this['analysis_dim_row'] = analysisDimRow;
    }
    public get analysisDimRow(): string | undefined {
        return this['analysis_dim_row'];
    }
    public withCompareDimColumn(compareDimColumn: string): GenerateReportInfo {
        this['compare_dim_column'] = compareDimColumn;
        return this;
    }
    public set compareDimColumn(compareDimColumn: string  | undefined) {
        this['compare_dim_column'] = compareDimColumn;
    }
    public get compareDimColumn(): string | undefined {
        return this['compare_dim_column'];
    }
    public withFilter(filter: ReportFilter): GenerateReportInfo {
        this['filter'] = filter;
        return this;
    }
}