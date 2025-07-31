import { LabelInfo } from './LabelInfo';


export class ServerlessDeploymentInfo {
    public name?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    public status?: string;
    private 'protect_status'?: string;
    private 'pods_num'?: number;
    private 'image_name'?: string;
    private 'match_labels'?: Array<LabelInfo>;
    private 'create_time'?: number;
    private 'agent_installed_num'?: number;
    private 'agent_install_failed_num'?: number;
    private 'agent_not_install_num'?: number;
    public constructor() { 
    }
    public withName(name: string): ServerlessDeploymentInfo {
        this['name'] = name;
        return this;
    }
    public withNamespaceName(namespaceName: string): ServerlessDeploymentInfo {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): ServerlessDeploymentInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withStatus(status: string): ServerlessDeploymentInfo {
        this['status'] = status;
        return this;
    }
    public withProtectStatus(protectStatus: string): ServerlessDeploymentInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withPodsNum(podsNum: number): ServerlessDeploymentInfo {
        this['pods_num'] = podsNum;
        return this;
    }
    public set podsNum(podsNum: number  | undefined) {
        this['pods_num'] = podsNum;
    }
    public get podsNum(): number | undefined {
        return this['pods_num'];
    }
    public withImageName(imageName: string): ServerlessDeploymentInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withMatchLabels(matchLabels: Array<LabelInfo>): ServerlessDeploymentInfo {
        this['match_labels'] = matchLabels;
        return this;
    }
    public set matchLabels(matchLabels: Array<LabelInfo>  | undefined) {
        this['match_labels'] = matchLabels;
    }
    public get matchLabels(): Array<LabelInfo> | undefined {
        return this['match_labels'];
    }
    public withCreateTime(createTime: number): ServerlessDeploymentInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withAgentInstalledNum(agentInstalledNum: number): ServerlessDeploymentInfo {
        this['agent_installed_num'] = agentInstalledNum;
        return this;
    }
    public set agentInstalledNum(agentInstalledNum: number  | undefined) {
        this['agent_installed_num'] = agentInstalledNum;
    }
    public get agentInstalledNum(): number | undefined {
        return this['agent_installed_num'];
    }
    public withAgentInstallFailedNum(agentInstallFailedNum: number): ServerlessDeploymentInfo {
        this['agent_install_failed_num'] = agentInstallFailedNum;
        return this;
    }
    public set agentInstallFailedNum(agentInstallFailedNum: number  | undefined) {
        this['agent_install_failed_num'] = agentInstallFailedNum;
    }
    public get agentInstallFailedNum(): number | undefined {
        return this['agent_install_failed_num'];
    }
    public withAgentNotInstallNum(agentNotInstallNum: number): ServerlessDeploymentInfo {
        this['agent_not_install_num'] = agentNotInstallNum;
        return this;
    }
    public set agentNotInstallNum(agentNotInstallNum: number  | undefined) {
        this['agent_not_install_num'] = agentNotInstallNum;
    }
    public get agentNotInstallNum(): number | undefined {
        return this['agent_not_install_num'];
    }
}