

export class LtsLogErrorDetail {
    private 'node_id'?: string;
    public time?: string;
    public level?: string;
    public content?: string;
    private 'line_num'?: string;
    public constructor() { 
    }
    public withNodeId(nodeId: string): LtsLogErrorDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withTime(time: string): LtsLogErrorDetail {
        this['time'] = time;
        return this;
    }
    public withLevel(level: string): LtsLogErrorDetail {
        this['level'] = level;
        return this;
    }
    public withContent(content: string): LtsLogErrorDetail {
        this['content'] = content;
        return this;
    }
    public withLineNum(lineNum: string): LtsLogErrorDetail {
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