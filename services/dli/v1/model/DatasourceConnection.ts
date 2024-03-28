

export class DatasourceConnection {
    private 'is_success'?: boolean;
    public message?: string;
    private 'connection_id'?: string;
    public destination?: string;
    public state?: string;
    public process?: number;
    public name?: string;
    private 'connection_url'?: string;
    private 'cluster_name'?: string;
    public service?: string;
    private 'create_time'?: number;
    private 'queue_list'?: Array<string>;
    public constructor() { 
    }
    public withIsSuccess(isSuccess: boolean): DatasourceConnection {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): DatasourceConnection {
        this['message'] = message;
        return this;
    }
    public withConnectionId(connectionId: string): DatasourceConnection {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDestination(destination: string): DatasourceConnection {
        this['destination'] = destination;
        return this;
    }
    public withState(state: string): DatasourceConnection {
        this['state'] = state;
        return this;
    }
    public withProcess(process: number): DatasourceConnection {
        this['process'] = process;
        return this;
    }
    public withName(name: string): DatasourceConnection {
        this['name'] = name;
        return this;
    }
    public withConnectionUrl(connectionUrl: string): DatasourceConnection {
        this['connection_url'] = connectionUrl;
        return this;
    }
    public set connectionUrl(connectionUrl: string  | undefined) {
        this['connection_url'] = connectionUrl;
    }
    public get connectionUrl(): string | undefined {
        return this['connection_url'];
    }
    public withClusterName(clusterName: string): DatasourceConnection {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withService(service: string): DatasourceConnection {
        this['service'] = service;
        return this;
    }
    public withCreateTime(createTime: number): DatasourceConnection {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withQueueList(queueList: Array<string>): DatasourceConnection {
        this['queue_list'] = queueList;
        return this;
    }
    public set queueList(queueList: Array<string>  | undefined) {
        this['queue_list'] = queueList;
    }
    public get queueList(): Array<string> | undefined {
        return this['queue_list'];
    }
}