

export class QueryNamespaceResp {
    public name?: string;
    private 'create_time'?: string;
    public labels?: { [key: string]: string; };
    public status?: string;
    public constructor() { 
    }
    public withName(name: string): QueryNamespaceResp {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: string): QueryNamespaceResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLabels(labels: { [key: string]: string; }): QueryNamespaceResp {
        this['labels'] = labels;
        return this;
    }
    public withStatus(status: string): QueryNamespaceResp {
        this['status'] = status;
        return this;
    }
}