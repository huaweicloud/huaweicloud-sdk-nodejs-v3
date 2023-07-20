

export class ListInstancesNodeResult {
    public id?: string;
    public name?: string;
    public status?: string;
    public role?: string;
    private 'subnet_id'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'spec_code'?: string;
    private 'availability_zone'?: string;
    private 'support_reduce'?: boolean;
    public constructor(id?: string, name?: string, status?: string, role?: string, subnetId?: string, privateIp?: string, publicIp?: string, specCode?: string, availabilityZone?: string, supportReduce?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['role'] = role;
        this['subnet_id'] = subnetId;
        this['private_ip'] = privateIp;
        this['public_ip'] = publicIp;
        this['spec_code'] = specCode;
        this['availability_zone'] = availabilityZone;
        this['support_reduce'] = supportReduce;
    }
    public withId(id: string): ListInstancesNodeResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstancesNodeResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListInstancesNodeResult {
        this['status'] = status;
        return this;
    }
    public withRole(role: string): ListInstancesNodeResult {
        this['role'] = role;
        return this;
    }
    public withSubnetId(subnetId: string): ListInstancesNodeResult {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withPrivateIp(privateIp: string): ListInstancesNodeResult {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListInstancesNodeResult {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withSpecCode(specCode: string): ListInstancesNodeResult {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAvailabilityZone(availabilityZone: string): ListInstancesNodeResult {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSupportReduce(supportReduce: boolean): ListInstancesNodeResult {
        this['support_reduce'] = supportReduce;
        return this;
    }
    public set supportReduce(supportReduce: boolean  | undefined) {
        this['support_reduce'] = supportReduce;
    }
    public get supportReduce(): boolean | undefined {
        return this['support_reduce'];
    }
}