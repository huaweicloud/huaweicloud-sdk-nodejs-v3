

export class ErrorLogList {
    private 'node_name'?: string;
    public level?: string;
    public time?: string;
    public content?: string;
    public constructor(nodeName?: string, level?: string, time?: string, content?: string) { 
        this['node_name'] = nodeName;
        this['level'] = level;
        this['time'] = time;
        this['content'] = content;
    }
    public withNodeName(nodeName: string): ErrorLogList {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withLevel(level: string): ErrorLogList {
        this['level'] = level;
        return this;
    }
    public withTime(time: string): ErrorLogList {
        this['time'] = time;
        return this;
    }
    public withContent(content: string): ErrorLogList {
        this['content'] = content;
        return this;
    }
}