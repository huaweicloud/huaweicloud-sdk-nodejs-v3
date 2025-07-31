import { LabelInfo } from './LabelInfo';


export class ServerlessJobInfo {
    public name?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    public status?: string;
    private 'pods_num'?: number;
    private 'image_name'?: string;
    private 'match_labels'?: Array<LabelInfo>;
    private 'execute_time'?: number;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withName(name: string): ServerlessJobInfo {
        this['name'] = name;
        return this;
    }
    public withNamespaceName(namespaceName: string): ServerlessJobInfo {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): ServerlessJobInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withStatus(status: string): ServerlessJobInfo {
        this['status'] = status;
        return this;
    }
    public withPodsNum(podsNum: number): ServerlessJobInfo {
        this['pods_num'] = podsNum;
        return this;
    }
    public set podsNum(podsNum: number  | undefined) {
        this['pods_num'] = podsNum;
    }
    public get podsNum(): number | undefined {
        return this['pods_num'];
    }
    public withImageName(imageName: string): ServerlessJobInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withMatchLabels(matchLabels: Array<LabelInfo>): ServerlessJobInfo {
        this['match_labels'] = matchLabels;
        return this;
    }
    public set matchLabels(matchLabels: Array<LabelInfo>  | undefined) {
        this['match_labels'] = matchLabels;
    }
    public get matchLabels(): Array<LabelInfo> | undefined {
        return this['match_labels'];
    }
    public withExecuteTime(executeTime: number): ServerlessJobInfo {
        this['execute_time'] = executeTime;
        return this;
    }
    public set executeTime(executeTime: number  | undefined) {
        this['execute_time'] = executeTime;
    }
    public get executeTime(): number | undefined {
        return this['execute_time'];
    }
    public withCreateTime(createTime: number): ServerlessJobInfo {
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