

export class ShowBatchJobDetailResp {
    public id?: string;
    public state?: string;
    public appId?: string;
    public log?: Array<string>;
    private 'sc_type'?: string;
    private 'cluster_name'?: string;
    private 'create_time'?: number;
    public name?: string;
    public owner?: string;
    public proxyUser?: string;
    public kind?: string;
    public queue?: string;
    public image?: string;
    private 'update_time'?: number;
    public duration?: number;
    public constructor() { 
    }
    public withId(id: string): ShowBatchJobDetailResp {
        this['id'] = id;
        return this;
    }
    public withState(state: string): ShowBatchJobDetailResp {
        this['state'] = state;
        return this;
    }
    public withAppId(appId: string): ShowBatchJobDetailResp {
        this['appId'] = appId;
        return this;
    }
    public withLog(log: Array<string>): ShowBatchJobDetailResp {
        this['log'] = log;
        return this;
    }
    public withScType(scType: string): ShowBatchJobDetailResp {
        this['sc_type'] = scType;
        return this;
    }
    public set scType(scType: string  | undefined) {
        this['sc_type'] = scType;
    }
    public get scType(): string | undefined {
        return this['sc_type'];
    }
    public withClusterName(clusterName: string): ShowBatchJobDetailResp {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withCreateTime(createTime: number): ShowBatchJobDetailResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withName(name: string): ShowBatchJobDetailResp {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): ShowBatchJobDetailResp {
        this['owner'] = owner;
        return this;
    }
    public withProxyUser(proxyUser: string): ShowBatchJobDetailResp {
        this['proxyUser'] = proxyUser;
        return this;
    }
    public withKind(kind: string): ShowBatchJobDetailResp {
        this['kind'] = kind;
        return this;
    }
    public withQueue(queue: string): ShowBatchJobDetailResp {
        this['queue'] = queue;
        return this;
    }
    public withImage(image: string): ShowBatchJobDetailResp {
        this['image'] = image;
        return this;
    }
    public withUpdateTime(updateTime: number): ShowBatchJobDetailResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDuration(duration: number): ShowBatchJobDetailResp {
        this['duration'] = duration;
        return this;
    }
}