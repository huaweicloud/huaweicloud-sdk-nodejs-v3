

export class CreateIntranetAccessRequestBody {
    private 'project_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public description?: string;
    public constructor(projectId?: string, vpcId?: string, subnetId?: string) { 
        this['project_id'] = projectId;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withProjectId(projectId: string): CreateIntranetAccessRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVpcId(vpcId: string): CreateIntranetAccessRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateIntranetAccessRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withDescription(description: string): CreateIntranetAccessRequestBody {
        this['description'] = description;
        return this;
    }
}