

export class StructLogContents {
    private 'log_content'?: string;
    private 'line_num'?: string;
    public constructor() { 
    }
    public withLogContent(logContent: string): StructLogContents {
        this['log_content'] = logContent;
        return this;
    }
    public set logContent(logContent: string  | undefined) {
        this['log_content'] = logContent;
    }
    public get logContent(): string | undefined {
        return this['log_content'];
    }
    public withLineNum(lineNum: string): StructLogContents {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
}