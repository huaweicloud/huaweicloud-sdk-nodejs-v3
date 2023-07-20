

export class ElbResp {
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'private_endpoint'?: string;
    public name?: string;
    public id?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withPublicIp(publicIp: string): ElbResp {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ElbResp {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPrivateEndpoint(privateEndpoint: string): ElbResp {
        this['private_endpoint'] = privateEndpoint;
        return this;
    }
    public set privateEndpoint(privateEndpoint: string  | undefined) {
        this['private_endpoint'] = privateEndpoint;
    }
    public get privateEndpoint(): string | undefined {
        return this['private_endpoint'];
    }
    public withName(name: string): ElbResp {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ElbResp {
        this['id'] = id;
        return this;
    }
    public withVpcId(vpcId: string): ElbResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}