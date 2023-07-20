

export class ShowJobRespJobDetailSchemaPath {
    public path?: string;
    public log?: string;
    public status?: string;
    public cause?: string;
    private 'total_lines'?: number;
    private 'failed_lines'?: number;
    private 'successful_lines'?: number;
    public constructor() { 
    }
    public withPath(path: string): ShowJobRespJobDetailSchemaPath {
        this['path'] = path;
        return this;
    }
    public withLog(log: string): ShowJobRespJobDetailSchemaPath {
        this['log'] = log;
        return this;
    }
    public withStatus(status: string): ShowJobRespJobDetailSchemaPath {
        this['status'] = status;
        return this;
    }
    public withCause(cause: string): ShowJobRespJobDetailSchemaPath {
        this['cause'] = cause;
        return this;
    }
    public withTotalLines(totalLines: number): ShowJobRespJobDetailSchemaPath {
        this['total_lines'] = totalLines;
        return this;
    }
    public set totalLines(totalLines: number  | undefined) {
        this['total_lines'] = totalLines;
    }
    public get totalLines(): number | undefined {
        return this['total_lines'];
    }
    public withFailedLines(failedLines: number): ShowJobRespJobDetailSchemaPath {
        this['failed_lines'] = failedLines;
        return this;
    }
    public set failedLines(failedLines: number  | undefined) {
        this['failed_lines'] = failedLines;
    }
    public get failedLines(): number | undefined {
        return this['failed_lines'];
    }
    public withSuccessfulLines(successfulLines: number): ShowJobRespJobDetailSchemaPath {
        this['successful_lines'] = successfulLines;
        return this;
    }
    public set successfulLines(successfulLines: number  | undefined) {
        this['successful_lines'] = successfulLines;
    }
    public get successfulLines(): number | undefined {
        return this['successful_lines'];
    }
}