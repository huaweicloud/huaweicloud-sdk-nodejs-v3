

export class ListWebTamperEventRequest {
    private 'enterprise_project_id'?: string;
    public type?: string;
    public offset?: number;
    public limit?: number;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'host_private_ip'?: string;
    private 'container_name'?: string;
    private 'container_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'file_path'?: string;
    private 'process_path'?: string;
    private 'process_env'?: string;
    private 'web_app_name'?: string;
    private 'start_event_time'?: number;
    private 'end_event_time'?: number;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebTamperEventRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ListWebTamperEventRequest {
        this['type'] = type;
        return this;
    }
    public withOffset(offset: number): ListWebTamperEventRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebTamperEventRequest {
        this['limit'] = limit;
        return this;
    }
    public withImageName(imageName: string): ListWebTamperEventRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListWebTamperEventRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withHostName(hostName: string): ListWebTamperEventRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListWebTamperEventRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostPrivateIp(hostPrivateIp: string): ListWebTamperEventRequest {
        this['host_private_ip'] = hostPrivateIp;
        return this;
    }
    public set hostPrivateIp(hostPrivateIp: string  | undefined) {
        this['host_private_ip'] = hostPrivateIp;
    }
    public get hostPrivateIp(): string | undefined {
        return this['host_private_ip'];
    }
    public withContainerName(containerName: string): ListWebTamperEventRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerId(containerId: string): ListWebTamperEventRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withClusterName(clusterName: string): ListWebTamperEventRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ListWebTamperEventRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withFilePath(filePath: string): ListWebTamperEventRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withProcessPath(processPath: string): ListWebTamperEventRequest {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withProcessEnv(processEnv: string): ListWebTamperEventRequest {
        this['process_env'] = processEnv;
        return this;
    }
    public set processEnv(processEnv: string  | undefined) {
        this['process_env'] = processEnv;
    }
    public get processEnv(): string | undefined {
        return this['process_env'];
    }
    public withWebAppName(webAppName: string): ListWebTamperEventRequest {
        this['web_app_name'] = webAppName;
        return this;
    }
    public set webAppName(webAppName: string  | undefined) {
        this['web_app_name'] = webAppName;
    }
    public get webAppName(): string | undefined {
        return this['web_app_name'];
    }
    public withStartEventTime(startEventTime: number): ListWebTamperEventRequest {
        this['start_event_time'] = startEventTime;
        return this;
    }
    public set startEventTime(startEventTime: number  | undefined) {
        this['start_event_time'] = startEventTime;
    }
    public get startEventTime(): number | undefined {
        return this['start_event_time'];
    }
    public withEndEventTime(endEventTime: number): ListWebTamperEventRequest {
        this['end_event_time'] = endEventTime;
        return this;
    }
    public set endEventTime(endEventTime: number  | undefined) {
        this['end_event_time'] = endEventTime;
    }
    public get endEventTime(): number | undefined {
        return this['end_event_time'];
    }
}