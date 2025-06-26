

export class InternalEndpoint {
    public id?: string;
    private 'vpcep_endpoint_id'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'vpc_id'?: string;
    private 'vpc_name'?: string;
    private 'vpc_cidr'?: string;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    private 'subnet_cidr'?: string;
    private 'endpoint_ip'?: string;
    public description?: string;
    public status?: InternalEndpointStatusEnum | string;
    private 'status_text'?: string;
    private 'created_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): InternalEndpoint {
        this['id'] = id;
        return this;
    }
    public withVpcepEndpointId(vpcepEndpointId: string): InternalEndpoint {
        this['vpcep_endpoint_id'] = vpcepEndpointId;
        return this;
    }
    public set vpcepEndpointId(vpcepEndpointId: string  | undefined) {
        this['vpcep_endpoint_id'] = vpcepEndpointId;
    }
    public get vpcepEndpointId(): string | undefined {
        return this['vpcep_endpoint_id'];
    }
    public withProjectId(projectId: string): InternalEndpoint {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): InternalEndpoint {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withVpcId(vpcId: string): InternalEndpoint {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): InternalEndpoint {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withVpcCidr(vpcCidr: string): InternalEndpoint {
        this['vpc_cidr'] = vpcCidr;
        return this;
    }
    public set vpcCidr(vpcCidr: string  | undefined) {
        this['vpc_cidr'] = vpcCidr;
    }
    public get vpcCidr(): string | undefined {
        return this['vpc_cidr'];
    }
    public withSubnetId(subnetId: string): InternalEndpoint {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): InternalEndpoint {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withSubnetCidr(subnetCidr: string): InternalEndpoint {
        this['subnet_cidr'] = subnetCidr;
        return this;
    }
    public set subnetCidr(subnetCidr: string  | undefined) {
        this['subnet_cidr'] = subnetCidr;
    }
    public get subnetCidr(): string | undefined {
        return this['subnet_cidr'];
    }
    public withEndpointIp(endpointIp: string): InternalEndpoint {
        this['endpoint_ip'] = endpointIp;
        return this;
    }
    public set endpointIp(endpointIp: string  | undefined) {
        this['endpoint_ip'] = endpointIp;
    }
    public get endpointIp(): string | undefined {
        return this['endpoint_ip'];
    }
    public withDescription(description: string): InternalEndpoint {
        this['description'] = description;
        return this;
    }
    public withStatus(status: InternalEndpointStatusEnum | string): InternalEndpoint {
        this['status'] = status;
        return this;
    }
    public withStatusText(statusText: string): InternalEndpoint {
        this['status_text'] = statusText;
        return this;
    }
    public set statusText(statusText: string  | undefined) {
        this['status_text'] = statusText;
    }
    public get statusText(): string | undefined {
        return this['status_text'];
    }
    public withCreatedAt(createdAt: Date): InternalEndpoint {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InternalEndpointStatusEnum {
    CREATING = 'Creating',
    RUNNING = 'Running',
    CREATEERROR = 'CreateError',
    DELETING = 'Deleting',
    DELETEERROR = 'DeleteError'
}
