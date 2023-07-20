

export class NodeResult {
    public id?: string;
    public name?: string;
    public role?: string;
    public status?: string;
    private 'availability_zone'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'component_names'?: string;
    public constructor(id?: string, name?: string, role?: string, status?: string, availabilityZone?: string, privateIp?: string, publicIp?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['role'] = role;
        this['status'] = status;
        this['availability_zone'] = availabilityZone;
        this['private_ip'] = privateIp;
        this['public_ip'] = publicIp;
    }
    public withId(id: string): NodeResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NodeResult {
        this['name'] = name;
        return this;
    }
    public withRole(role: string): NodeResult {
        this['role'] = role;
        return this;
    }
    public withStatus(status: string): NodeResult {
        this['status'] = status;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): NodeResult {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withPrivateIp(privateIp: string): NodeResult {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): NodeResult {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withComponentNames(componentNames: string): NodeResult {
        this['component_names'] = componentNames;
        return this;
    }
    public set componentNames(componentNames: string  | undefined) {
        this['component_names'] = componentNames;
    }
    public get componentNames(): string | undefined {
        return this['component_names'];
    }
}