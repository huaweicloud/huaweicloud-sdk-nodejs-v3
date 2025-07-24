import { ReportFilter } from './ReportFilter';


export class OprReportInfo {
    public name?: string;
    public type?: number;
    private 'workpiece_type'?: string;
    private 'analysis_dim_row'?: string;
    private 'compare_dim_column'?: string;
    public filter?: ReportFilter;
    public constructor() { 
    }
    public withName(name: string): OprReportInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: number): OprReportInfo {
        this['type'] = type;
        return this;
    }
    public withWorkpieceType(workpieceType: string): OprReportInfo {
        this['workpiece_type'] = workpieceType;
        return this;
    }
    public set workpieceType(workpieceType: string  | undefined) {
        this['workpiece_type'] = workpieceType;
    }
    public get workpieceType(): string | undefined {
        return this['workpiece_type'];
    }
    public withAnalysisDimRow(analysisDimRow: string): OprReportInfo {
        this['analysis_dim_row'] = analysisDimRow;
        return this;
    }
    public set analysisDimRow(analysisDimRow: string  | undefined) {
        this['analysis_dim_row'] = analysisDimRow;
    }
    public get analysisDimRow(): string | undefined {
        return this['analysis_dim_row'];
    }
    public withCompareDimColumn(compareDimColumn: string): OprReportInfo {
        this['compare_dim_column'] = compareDimColumn;
        return this;
    }
    public set compareDimColumn(compareDimColumn: string  | undefined) {
        this['compare_dim_column'] = compareDimColumn;
    }
    public get compareDimColumn(): string | undefined {
        return this['compare_dim_column'];
    }
    public withFilter(filter: ReportFilter): OprReportInfo {
        this['filter'] = filter;
        return this;
    }
}