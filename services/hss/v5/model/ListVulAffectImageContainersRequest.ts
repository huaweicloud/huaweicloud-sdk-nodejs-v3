

export class ListVulAffectImageContainersRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'image_id'?: string;
    private 'image_digest'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'agent_id'?: string;
    public constructor(imageId?: string, imageDigest?: string, imageName?: string, imageVersion?: string, agentId?: string) { 
        this['image_id'] = imageId;
        this['image_digest'] = imageDigest;
        this['image_name'] = imageName;
        this['image_version'] = imageVersion;
        this['agent_id'] = agentId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulAffectImageContainersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListVulAffectImageContainersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVulAffectImageContainersRequest {
        this['limit'] = limit;
        return this;
    }
    public withImageId(imageId: string): ListVulAffectImageContainersRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageDigest(imageDigest: string): ListVulAffectImageContainersRequest {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withImageName(imageName: string): ListVulAffectImageContainersRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ListVulAffectImageContainersRequest {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withAgentId(agentId: string): ListVulAffectImageContainersRequest {
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