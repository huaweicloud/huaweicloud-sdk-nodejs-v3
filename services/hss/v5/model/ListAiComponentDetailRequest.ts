

export class ListAiComponentDetailRequest {
    public limit?: number;
    public offset?: number;
    public category?: string;
    public catalogue?: string;
    private 'server_name'?: string;
    private 'server_ip'?: string;
    private 'ai_application'?: string;
    private 'host_id'?: string;
    private 'ai_tool'?: string;
    public type?: string;
    public version?: string;
    private 'installation_path'?: string;
    private 'first_scan_time'?: number;
    private 'latest_scan_time'?: number;
    private 'container_name'?: string;
    private 'container_id'?: string;
    private 'image_name'?: string;
    public constructor(category?: string, catalogue?: string) { 
        this['category'] = category;
        this['catalogue'] = catalogue;
    }
    public withLimit(limit: number): ListAiComponentDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAiComponentDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListAiComponentDetailRequest {
        this['category'] = category;
        return this;
    }
    public withCatalogue(catalogue: string): ListAiComponentDetailRequest {
        this['catalogue'] = catalogue;
        return this;
    }
    public withServerName(serverName: string): ListAiComponentDetailRequest {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerIp(serverIp: string): ListAiComponentDetailRequest {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withAiApplication(aiApplication: string): ListAiComponentDetailRequest {
        this['ai_application'] = aiApplication;
        return this;
    }
    public set aiApplication(aiApplication: string  | undefined) {
        this['ai_application'] = aiApplication;
    }
    public get aiApplication(): string | undefined {
        return this['ai_application'];
    }
    public withHostId(hostId: string): ListAiComponentDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withAiTool(aiTool: string): ListAiComponentDetailRequest {
        this['ai_tool'] = aiTool;
        return this;
    }
    public set aiTool(aiTool: string  | undefined) {
        this['ai_tool'] = aiTool;
    }
    public get aiTool(): string | undefined {
        return this['ai_tool'];
    }
    public withType(type: string): ListAiComponentDetailRequest {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListAiComponentDetailRequest {
        this['version'] = version;
        return this;
    }
    public withInstallationPath(installationPath: string): ListAiComponentDetailRequest {
        this['installation_path'] = installationPath;
        return this;
    }
    public set installationPath(installationPath: string  | undefined) {
        this['installation_path'] = installationPath;
    }
    public get installationPath(): string | undefined {
        return this['installation_path'];
    }
    public withFirstScanTime(firstScanTime: number): ListAiComponentDetailRequest {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: number  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): number | undefined {
        return this['first_scan_time'];
    }
    public withLatestScanTime(latestScanTime: number): ListAiComponentDetailRequest {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withContainerName(containerName: string): ListAiComponentDetailRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerId(containerId: string): ListAiComponentDetailRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withImageName(imageName: string): ListAiComponentDetailRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
}