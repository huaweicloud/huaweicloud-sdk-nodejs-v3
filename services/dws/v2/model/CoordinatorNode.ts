

export class CoordinatorNode {
    public id?: string;
    public name?: string;
    private 'private_ip'?: string;
    public constructor(id?: string, name?: string, privateIp?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['private_ip'] = privateIp;
    }
    public withId(id: string): CoordinatorNode {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CoordinatorNode {
        this['name'] = name;
        return this;
    }
    public withPrivateIp(privateIp: string): CoordinatorNode {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
}