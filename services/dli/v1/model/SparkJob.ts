

export class SparkJob {
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
    private 'req_body'?: string;
    private 'update_time'?: number;
    public duration?: number;
    public constructor() { 
    }
    public withId(id: string): SparkJob {
        this['id'] = id;
        return this;
    }
    public withState(state: string): SparkJob {
        this['state'] = state;
        return this;
    }
    public withAppId(appId: string): SparkJob {
        this['appId'] = appId;
        return this;
    }
    public withLog(log: Array<string>): SparkJob {
        this['log'] = log;
        return this;
    }
    public withScType(scType: string): SparkJob {
        this['sc_type'] = scType;
        return this;
    }
    public set scType(scType: string  | undefined) {
        this['sc_type'] = scType;
    }
    public get scType(): string | undefined {
        return this['sc_type'];
    }
    public withClusterName(clusterName: string): SparkJob {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withCreateTime(createTime: number): SparkJob {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withName(name: string): SparkJob {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): SparkJob {
        this['owner'] = owner;
        return this;
    }
    public withProxyUser(proxyUser: string): SparkJob {
        this['proxyUser'] = proxyUser;
        return this;
    }
    public withKind(kind: string): SparkJob {
        this['kind'] = kind;
        return this;
    }
    public withQueue(queue: string): SparkJob {
        this['queue'] = queue;
        return this;
    }
    public withImage(image: string): SparkJob {
        this['image'] = image;
        return this;
    }
    public withReqBody(reqBody: string): SparkJob {
        this['req_body'] = reqBody;
        return this;
    }
    public set reqBody(reqBody: string  | undefined) {
        this['req_body'] = reqBody;
    }
    public get reqBody(): string | undefined {
        return this['req_body'];
    }
    public withUpdateTime(updateTime: number): SparkJob {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDuration(duration: number): SparkJob {
        this['duration'] = duration;
        return this;
    }
}