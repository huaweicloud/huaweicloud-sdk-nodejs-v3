

export class StructLogContents {
    private 'log_content'?: string | undefined;
    private 'line_num'?: string | undefined;
    public constructor() { 
    }
    public withLogContent(logContent: string): StructLogContents {
        this['log_content'] = logContent;
        return this;
    }
    public set logContent(logContent: string | undefined) {
        this['log_content'] = logContent;
    }
    public get logContent() {
        return this['log_content'];
    }
    public withLineNum(lineNum: string): StructLogContents {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum() {
        return this['line_num'];
    }
}