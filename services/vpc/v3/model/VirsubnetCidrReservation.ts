

export class VirsubnetCidrReservation {
    public id?: string;
    private 'virsubnet_id'?: string;
    private 'vpc_id'?: string;
    private 'ip_version'?: number;
    public cidr?: string;
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(id?: string, virsubnetId?: string, vpcId?: string, ipVersion?: number, cidr?: string, name?: string, description?: string, projectId?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['virsubnet_id'] = virsubnetId;
        this['vpc_id'] = vpcId;
        this['ip_version'] = ipVersion;
        this['cidr'] = cidr;
        this['name'] = name;
        this['description'] = description;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): VirsubnetCidrReservation {
        this['id'] = id;
        return this;
    }
    public withVirsubnetId(virsubnetId: string): VirsubnetCidrReservation {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withVpcId(vpcId: string): VirsubnetCidrReservation {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withIpVersion(ipVersion: number): VirsubnetCidrReservation {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withCidr(cidr: string): VirsubnetCidrReservation {
        this['cidr'] = cidr;
        return this;
    }
    public withName(name: string): VirsubnetCidrReservation {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): VirsubnetCidrReservation {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): VirsubnetCidrReservation {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): VirsubnetCidrReservation {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): VirsubnetCidrReservation {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}