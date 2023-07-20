

export class ErrorLogItem {
    public time?: string;
    public level?: string;
    public content?: string;
    private 'line_num'?: string;
    public constructor() { 
    }
    public withTime(time: string): ErrorLogItem {
        this['time'] = time;
        return this;
    }
    public withLevel(level: string): ErrorLogItem {
        this['level'] = level;
        return this;
    }
    public withContent(content: string): ErrorLogItem {
        this['content'] = content;
        return this;
    }
    public withLineNum(lineNum: string): ErrorLogItem {
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