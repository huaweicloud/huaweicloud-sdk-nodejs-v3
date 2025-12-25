import { UpdateVpcEndpointServiceRequestBody } from './UpdateVpcEndpointServiceRequestBody';


export class UpdateVpcEndpointServiceRequest {
    private 'workspace_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public body?: UpdateVpcEndpointServiceRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): UpdateVpcEndpointServiceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVpcId(vpcId: string): UpdateVpcEndpointServiceRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): UpdateVpcEndpointServiceRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withBody(body: UpdateVpcEndpointServiceRequestBody): UpdateVpcEndpointServiceRequest {
        this['body'] = body;
        return this;
    }
}