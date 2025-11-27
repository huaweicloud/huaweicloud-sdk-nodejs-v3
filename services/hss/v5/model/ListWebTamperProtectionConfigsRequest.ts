

export class ListWebTamperProtectionConfigsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    public id?: string;
    private 'web_app_name'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'protect_type'?: string;
    public status?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'host_private_ip'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebTamperProtectionConfigsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListWebTamperProtectionConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebTamperProtectionConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListWebTamperProtectionConfigsRequest {
        this['type'] = type;
        return this;
    }
    public withId(id: string): ListWebTamperProtectionConfigsRequest {
        this['id'] = id;
        return this;
    }
    public withWebAppName(webAppName: string): ListWebTamperProtectionConfigsRequest {
        this['web_app_name'] = webAppName;
        return this;
    }
    public set webAppName(webAppName: string  | undefined) {
        this['web_app_name'] = webAppName;
    }
    public get webAppName(): string | undefined {
        return this['web_app_name'];
    }
    public withImageName(imageName: string): ListWebTamperProtectionConfigsRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListWebTamperProtectionConfigsRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withProtectType(protectType: string): ListWebTamperProtectionConfigsRequest {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): string | undefined {
        return this['protect_type'];
    }
    public withStatus(status: string): ListWebTamperProtectionConfigsRequest {
        this['status'] = status;
        return this;
    }
    public withClusterName(clusterName: string): ListWebTamperProtectionConfigsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ListWebTamperProtectionConfigsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withHostName(hostName: string): ListWebTamperProtectionConfigsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListWebTamperProtectionConfigsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostPrivateIp(hostPrivateIp: string): ListWebTamperProtectionConfigsRequest {
        this['host_private_ip'] = hostPrivateIp;
        return this;
    }
    public set hostPrivateIp(hostPrivateIp: string  | undefined) {
        this['host_private_ip'] = hostPrivateIp;
    }
    public get hostPrivateIp(): string | undefined {
        return this['host_private_ip'];
    }
}