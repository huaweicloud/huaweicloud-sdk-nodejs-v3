import { HealthReportTableSpaceIncrInfo } from './HealthReportTableSpaceIncrInfo';
import { HealthReportTableSpaceInfo } from './HealthReportTableSpaceInfo';


export class HealthReportTableSpaceStat {
    private 'size_top'?: Array<HealthReportTableSpaceInfo>;
    private 'rows_top'?: Array<HealthReportTableSpaceInfo>;
    private 'size_incr_top'?: Array<HealthReportTableSpaceIncrInfo>;
    private 'rows_incr_top'?: Array<HealthReportTableSpaceIncrInfo>;
    private 'analyze_success'?: boolean;
    private 'error_message'?: string;
    public constructor(sizeTop?: Array<HealthReportTableSpaceInfo>, rowsTop?: Array<HealthReportTableSpaceInfo>, sizeIncrTop?: Array<HealthReportTableSpaceIncrInfo>, rowsIncrTop?: Array<HealthReportTableSpaceIncrInfo>, analyzeSuccess?: boolean, errorMessage?: string) { 
        this['size_top'] = sizeTop;
        this['rows_top'] = rowsTop;
        this['size_incr_top'] = sizeIncrTop;
        this['rows_incr_top'] = rowsIncrTop;
        this['analyze_success'] = analyzeSuccess;
        this['error_message'] = errorMessage;
    }
    public withSizeTop(sizeTop: Array<HealthReportTableSpaceInfo>): HealthReportTableSpaceStat {
        this['size_top'] = sizeTop;
        return this;
    }
    public set sizeTop(sizeTop: Array<HealthReportTableSpaceInfo>  | undefined) {
        this['size_top'] = sizeTop;
    }
    public get sizeTop(): Array<HealthReportTableSpaceInfo> | undefined {
        return this['size_top'];
    }
    public withRowsTop(rowsTop: Array<HealthReportTableSpaceInfo>): HealthReportTableSpaceStat {
        this['rows_top'] = rowsTop;
        return this;
    }
    public set rowsTop(rowsTop: Array<HealthReportTableSpaceInfo>  | undefined) {
        this['rows_top'] = rowsTop;
    }
    public get rowsTop(): Array<HealthReportTableSpaceInfo> | undefined {
        return this['rows_top'];
    }
    public withSizeIncrTop(sizeIncrTop: Array<HealthReportTableSpaceIncrInfo>): HealthReportTableSpaceStat {
        this['size_incr_top'] = sizeIncrTop;
        return this;
    }
    public set sizeIncrTop(sizeIncrTop: Array<HealthReportTableSpaceIncrInfo>  | undefined) {
        this['size_incr_top'] = sizeIncrTop;
    }
    public get sizeIncrTop(): Array<HealthReportTableSpaceIncrInfo> | undefined {
        return this['size_incr_top'];
    }
    public withRowsIncrTop(rowsIncrTop: Array<HealthReportTableSpaceIncrInfo>): HealthReportTableSpaceStat {
        this['rows_incr_top'] = rowsIncrTop;
        return this;
    }
    public set rowsIncrTop(rowsIncrTop: Array<HealthReportTableSpaceIncrInfo>  | undefined) {
        this['rows_incr_top'] = rowsIncrTop;
    }
    public get rowsIncrTop(): Array<HealthReportTableSpaceIncrInfo> | undefined {
        return this['rows_incr_top'];
    }
    public withAnalyzeSuccess(analyzeSuccess: boolean): HealthReportTableSpaceStat {
        this['analyze_success'] = analyzeSuccess;
        return this;
    }
    public set analyzeSuccess(analyzeSuccess: boolean  | undefined) {
        this['analyze_success'] = analyzeSuccess;
    }
    public get analyzeSuccess(): boolean | undefined {
        return this['analyze_success'];
    }
    public withErrorMessage(errorMessage: string): HealthReportTableSpaceStat {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}