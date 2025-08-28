

export class HealthReportTableSpaceIncrInfo {
    public database?: string;
    public table?: string;
    public increment?: number;
    private 'analyze_success'?: boolean;
    private 'error_message'?: string;
    public constructor(database?: string, table?: string, increment?: number, analyzeSuccess?: boolean, errorMessage?: string) { 
        this['database'] = database;
        this['table'] = table;
        this['increment'] = increment;
        this['analyze_success'] = analyzeSuccess;
        this['error_message'] = errorMessage;
    }
    public withDatabase(database: string): HealthReportTableSpaceIncrInfo {
        this['database'] = database;
        return this;
    }
    public withTable(table: string): HealthReportTableSpaceIncrInfo {
        this['table'] = table;
        return this;
    }
    public withIncrement(increment: number): HealthReportTableSpaceIncrInfo {
        this['increment'] = increment;
        return this;
    }
    public withAnalyzeSuccess(analyzeSuccess: boolean): HealthReportTableSpaceIncrInfo {
        this['analyze_success'] = analyzeSuccess;
        return this;
    }
    public set analyzeSuccess(analyzeSuccess: boolean  | undefined) {
        this['analyze_success'] = analyzeSuccess;
    }
    public get analyzeSuccess(): boolean | undefined {
        return this['analyze_success'];
    }
    public withErrorMessage(errorMessage: string): HealthReportTableSpaceIncrInfo {
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