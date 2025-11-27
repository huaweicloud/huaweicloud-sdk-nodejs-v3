import { WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo } from './WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo';
import { WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterLabelList } from './WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterLabelList';
import { WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo } from './WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo';


export class WebTamperProtectionConfigResponseInfoContainerWtpInfo {
    private 'web_app_name'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_type'?: string;
    private 'protect_type'?: string;
    private 'cluster_info'?: WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo;
    private 'cluster_label_list'?: Array<WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterLabelList>;
    private 'host_info'?: WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo;
    public constructor() { 
    }
    public withWebAppName(webAppName: string): WebTamperProtectionConfigResponseInfoContainerWtpInfo {
        this['web_app_name'] = webAppName;
        return this;
    }
    public set webAppName(webAppName: string  | undefined) {
        this['web_app_name'] = webAppName;
    }
    public get webAppName(): string | undefined {
        return this['web_app_name'];
    }
    public withImageName(imageName: string): WebTamperProtectionConfigResponseInfoContainerWtpInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): WebTamperProtectionConfigResponseInfoContainerWtpInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageType(imageType: string): WebTamperProtectionConfigResponseInfoContainerWtpInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withProtectType(protectType: string): WebTamperProtectionConfigResponseInfoContainerWtpInfo {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): string | undefined {
        return this['protect_type'];
    }
    public withClusterInfo(clusterInfo: WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo): WebTamperProtectionConfigResponseInfoContainerWtpInfo {
        this['cluster_info'] = clusterInfo;
        return this;
    }
    public set clusterInfo(clusterInfo: WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo  | undefined) {
        this['cluster_info'] = clusterInfo;
    }
    public get clusterInfo(): WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo | undefined {
        return this['cluster_info'];
    }
    public withClusterLabelList(clusterLabelList: Array<WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterLabelList>): WebTamperProtectionConfigResponseInfoContainerWtpInfo {
        this['cluster_label_list'] = clusterLabelList;
        return this;
    }
    public set clusterLabelList(clusterLabelList: Array<WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterLabelList>  | undefined) {
        this['cluster_label_list'] = clusterLabelList;
    }
    public get clusterLabelList(): Array<WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterLabelList> | undefined {
        return this['cluster_label_list'];
    }
    public withHostInfo(hostInfo: WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo): WebTamperProtectionConfigResponseInfoContainerWtpInfo {
        this['host_info'] = hostInfo;
        return this;
    }
    public set hostInfo(hostInfo: WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo  | undefined) {
        this['host_info'] = hostInfo;
    }
    public get hostInfo(): WebTamperProtectionConfigResponseInfoContainerWtpInfoHostInfo | undefined {
        return this['host_info'];
    }
}