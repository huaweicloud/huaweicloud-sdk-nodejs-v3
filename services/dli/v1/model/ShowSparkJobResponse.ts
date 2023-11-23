
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSparkJobResponse extends SdkResponse {
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
    public feature?: string;
    private 'spark_version'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSparkJobResponse {
        this['id'] = id;
        return this;
    }
    public withState(state: string): ShowSparkJobResponse {
        this['state'] = state;
        return this;
    }
    public withAppId(appId: string): ShowSparkJobResponse {
        this['appId'] = appId;
        return this;
    }
    public withLog(log: Array<string>): ShowSparkJobResponse {
        this['log'] = log;
        return this;
    }
    public withScType(scType: string): ShowSparkJobResponse {
        this['sc_type'] = scType;
        return this;
    }
    public set scType(scType: string  | undefined) {
        this['sc_type'] = scType;
    }
    public get scType(): string | undefined {
        return this['sc_type'];
    }
    public withClusterName(clusterName: string): ShowSparkJobResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withCreateTime(createTime: number): ShowSparkJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withName(name: string): ShowSparkJobResponse {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): ShowSparkJobResponse {
        this['owner'] = owner;
        return this;
    }
    public withProxyUser(proxyUser: string): ShowSparkJobResponse {
        this['proxyUser'] = proxyUser;
        return this;
    }
    public withKind(kind: string): ShowSparkJobResponse {
        this['kind'] = kind;
        return this;
    }
    public withQueue(queue: string): ShowSparkJobResponse {
        this['queue'] = queue;
        return this;
    }
    public withImage(image: string): ShowSparkJobResponse {
        this['image'] = image;
        return this;
    }
    public withReqBody(reqBody: string): ShowSparkJobResponse {
        this['req_body'] = reqBody;
        return this;
    }
    public set reqBody(reqBody: string  | undefined) {
        this['req_body'] = reqBody;
    }
    public get reqBody(): string | undefined {
        return this['req_body'];
    }
    public withUpdateTime(updateTime: number): ShowSparkJobResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withFeature(feature: string): ShowSparkJobResponse {
        this['feature'] = feature;
        return this;
    }
    public withSparkVersion(sparkVersion: string): ShowSparkJobResponse {
        this['spark_version'] = sparkVersion;
        return this;
    }
    public set sparkVersion(sparkVersion: string  | undefined) {
        this['spark_version'] = sparkVersion;
    }
    public get sparkVersion(): string | undefined {
        return this['spark_version'];
    }
}