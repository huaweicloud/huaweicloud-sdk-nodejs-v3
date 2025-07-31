import { LabelInfo } from './LabelInfo';


export class DaemonSetInfo {
    public name?: string;
    private 'namespace_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    private 'cluster_name'?: string;
    public status?: string;
    private 'pods_num'?: number;
    private 'image_name'?: string;
    private 'match_labels'?: Array<LabelInfo>;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withName(name: string): DaemonSetInfo {
        this['name'] = name;
        return this;
    }
    public withNamespaceName(namespaceName: string): DaemonSetInfo {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterId(clusterId: string): DaemonSetInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): DaemonSetInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withClusterName(clusterName: string): DaemonSetInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withStatus(status: string): DaemonSetInfo {
        this['status'] = status;
        return this;
    }
    public withPodsNum(podsNum: number): DaemonSetInfo {
        this['pods_num'] = podsNum;
        return this;
    }
    public set podsNum(podsNum: number  | undefined) {
        this['pods_num'] = podsNum;
    }
    public get podsNum(): number | undefined {
        return this['pods_num'];
    }
    public withImageName(imageName: string): DaemonSetInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withMatchLabels(matchLabels: Array<LabelInfo>): DaemonSetInfo {
        this['match_labels'] = matchLabels;
        return this;
    }
    public set matchLabels(matchLabels: Array<LabelInfo>  | undefined) {
        this['match_labels'] = matchLabels;
    }
    public get matchLabels(): Array<LabelInfo> | undefined {
        return this['match_labels'];
    }
    public withCreateTime(createTime: number): DaemonSetInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}