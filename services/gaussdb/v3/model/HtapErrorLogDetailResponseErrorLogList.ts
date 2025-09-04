

export class HtapErrorLogDetailResponseErrorLogList {
    private 'node_id'?: string;
    public time?: string;
    public level?: string;
    public content?: string;
    private 'line_num'?: string;
    public constructor(nodeId?: string, time?: string, level?: string, content?: string, lineNum?: string) { 
        this['node_id'] = nodeId;
        this['time'] = time;
        this['level'] = level;
        this['content'] = content;
        this['line_num'] = lineNum;
    }
    public withNodeId(nodeId: string): HtapErrorLogDetailResponseErrorLogList {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withTime(time: string): HtapErrorLogDetailResponseErrorLogList {
        this['time'] = time;
        return this;
    }
    public withLevel(level: string): HtapErrorLogDetailResponseErrorLogList {
        this['level'] = level;
        return this;
    }
    public withContent(content: string): HtapErrorLogDetailResponseErrorLogList {
        this['content'] = content;
        return this;
    }
    public withLineNum(lineNum: string): HtapErrorLogDetailResponseErrorLogList {
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