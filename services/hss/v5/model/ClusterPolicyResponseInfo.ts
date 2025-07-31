import { Resources } from './Resources';
import { WhiteImageInfo } from './WhiteImageInfo';


export class ClusterPolicyResponseInfo {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public content?: object;
    private 'deploy_content'?: string;
    public parameters?: string;
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    public resources?: Array<Resources>;
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_type'?: string;
    public description?: string;
    private 'update_time'?: number;
    private 'create_time'?: number;
    private 'image_num'?: number;
    private 'labels_num'?: number;
    public status?: string;
    private 'white_images'?: Array<WhiteImageInfo>;
    public constructor() { 
    }
    public withClusterId(clusterId: string): ClusterPolicyResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ClusterPolicyResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withContent(content: object): ClusterPolicyResponseInfo {
        this['content'] = content;
        return this;
    }
    public withDeployContent(deployContent: string): ClusterPolicyResponseInfo {
        this['deploy_content'] = deployContent;
        return this;
    }
    public set deployContent(deployContent: string  | undefined) {
        this['deploy_content'] = deployContent;
    }
    public get deployContent(): string | undefined {
        return this['deploy_content'];
    }
    public withParameters(parameters: string): ClusterPolicyResponseInfo {
        this['parameters'] = parameters;
        return this;
    }
    public withPolicyName(policyName: string): ClusterPolicyResponseInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): ClusterPolicyResponseInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withResources(resources: Array<Resources>): ClusterPolicyResponseInfo {
        this['resources'] = resources;
        return this;
    }
    public withTemplateId(templateId: string): ClusterPolicyResponseInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ClusterPolicyResponseInfo {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: string): ClusterPolicyResponseInfo {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withDescription(description: string): ClusterPolicyResponseInfo {
        this['description'] = description;
        return this;
    }
    public withUpdateTime(updateTime: number): ClusterPolicyResponseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: number): ClusterPolicyResponseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withImageNum(imageNum: number): ClusterPolicyResponseInfo {
        this['image_num'] = imageNum;
        return this;
    }
    public set imageNum(imageNum: number  | undefined) {
        this['image_num'] = imageNum;
    }
    public get imageNum(): number | undefined {
        return this['image_num'];
    }
    public withLabelsNum(labelsNum: number): ClusterPolicyResponseInfo {
        this['labels_num'] = labelsNum;
        return this;
    }
    public set labelsNum(labelsNum: number  | undefined) {
        this['labels_num'] = labelsNum;
    }
    public get labelsNum(): number | undefined {
        return this['labels_num'];
    }
    public withStatus(status: string): ClusterPolicyResponseInfo {
        this['status'] = status;
        return this;
    }
    public withWhiteImages(whiteImages: Array<WhiteImageInfo>): ClusterPolicyResponseInfo {
        this['white_images'] = whiteImages;
        return this;
    }
    public set whiteImages(whiteImages: Array<WhiteImageInfo>  | undefined) {
        this['white_images'] = whiteImages;
    }
    public get whiteImages(): Array<WhiteImageInfo> | undefined {
        return this['white_images'];
    }
}