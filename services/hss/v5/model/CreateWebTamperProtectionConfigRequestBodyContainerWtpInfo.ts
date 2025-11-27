import { ClusterLabelInfo } from './ClusterLabelInfo';
import { ProtectImageInfo } from './ProtectImageInfo';


export class CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo {
    private 'protect_type'?: string;
    private 'web_app_name'?: string;
    private 'cluster_id'?: string;
    private 'host_id'?: string;
    private 'cluster_label_list'?: Array<ClusterLabelInfo>;
    private 'protect_image_list'?: Array<ProtectImageInfo>;
    public constructor(protectType?: string, webAppName?: string, protectImageList?: Array<ProtectImageInfo>) { 
        this['protect_type'] = protectType;
        this['web_app_name'] = webAppName;
        this['protect_image_list'] = protectImageList;
    }
    public withProtectType(protectType: string): CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): string | undefined {
        return this['protect_type'];
    }
    public withWebAppName(webAppName: string): CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo {
        this['web_app_name'] = webAppName;
        return this;
    }
    public set webAppName(webAppName: string  | undefined) {
        this['web_app_name'] = webAppName;
    }
    public get webAppName(): string | undefined {
        return this['web_app_name'];
    }
    public withClusterId(clusterId: string): CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withHostId(hostId: string): CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withClusterLabelList(clusterLabelList: Array<ClusterLabelInfo>): CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo {
        this['cluster_label_list'] = clusterLabelList;
        return this;
    }
    public set clusterLabelList(clusterLabelList: Array<ClusterLabelInfo>  | undefined) {
        this['cluster_label_list'] = clusterLabelList;
    }
    public get clusterLabelList(): Array<ClusterLabelInfo> | undefined {
        return this['cluster_label_list'];
    }
    public withProtectImageList(protectImageList: Array<ProtectImageInfo>): CreateWebTamperProtectionConfigRequestBodyContainerWtpInfo {
        this['protect_image_list'] = protectImageList;
        return this;
    }
    public set protectImageList(protectImageList: Array<ProtectImageInfo>  | undefined) {
        this['protect_image_list'] = protectImageList;
    }
    public get protectImageList(): Array<ProtectImageInfo> | undefined {
        return this['protect_image_list'];
    }
}