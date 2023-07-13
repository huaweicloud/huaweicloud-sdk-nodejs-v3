

export class CoordinatorNode {
    public id: string;
    public name: string;
    private 'private_ip': string | undefined;
    public constructor(id?: any, name?: any, privateIp?: any) { 
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
    public set privateIp(privateIp: string | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp() {
        return this['private_ip'];
    }
}