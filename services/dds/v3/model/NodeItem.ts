

export class NodeItem {
    public id?: string;
    public name?: string;
    public status?: string;
    public role?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'spec_code'?: string;
    private 'availability_zone'?: string;
    public constructor(id?: string, name?: string, status?: string, role?: string, privateIp?: string, publicIp?: string, specCode?: string, availabilityZone?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['role'] = role;
        this['private_ip'] = privateIp;
        this['public_ip'] = publicIp;
        this['spec_code'] = specCode;
        this['availability_zone'] = availabilityZone;
    }
    public withId(id: string): NodeItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NodeItem {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): NodeItem {
        this['status'] = status;
        return this;
    }
    public withRole(role: string): NodeItem {
        this['role'] = role;
        return this;
    }
    public withPrivateIp(privateIp: string): NodeItem {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): NodeItem {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withSpecCode(specCode: string): NodeItem {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAvailabilityZone(availabilityZone: string): NodeItem {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}