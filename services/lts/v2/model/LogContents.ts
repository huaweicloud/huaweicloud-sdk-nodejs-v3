

export class LogContents {
    public content?: string;
    private 'line_num'?: string | undefined;
    public labels?: { [key: string]: string; };
    public constructor() { 
    }
    public withContent(content: string): LogContents {
        this['content'] = content;
        return this;
    }
    public withLineNum(lineNum: string): LogContents {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum() {
        return this['line_num'];
    }
    public withLabels(labels: { [key: string]: string; }): LogContents {
        this['labels'] = labels;
        return this;
    }
}