

export class ListLocalImageHostsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'image_digest'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'host_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'agent_id'?: string;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ListLocalImageHostsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLocalImageHostsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageDigest(imageDigest: string): ListLocalImageHostsRequest {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withImageName(imageName: string): ListLocalImageHostsRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListLocalImageHostsRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withHostName(hostName: string): ListLocalImageHostsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withOffset(offset: number): ListLocalImageHostsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLocalImageHostsRequest {
        this['limit'] = limit;
        return this;
    }
    public withAgentId(agentId: string): ListLocalImageHostsRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
}