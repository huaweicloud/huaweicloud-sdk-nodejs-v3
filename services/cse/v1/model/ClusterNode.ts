

export class ClusterNode {
    public id?: string;
    public az?: string;
    public ip?: string;
    public label?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): ClusterNode {
        this['id'] = id;
        return this;
    }
    public withAz(az: string): ClusterNode {
        this['az'] = az;
        return this;
    }
    public withIp(ip: string): ClusterNode {
        this['ip'] = ip;
        return this;
    }
    public withLabel(label: string): ClusterNode {
        this['label'] = label;
        return this;
    }
    public withStatus(status: string): ClusterNode {
        this['status'] = status;
        return this;
    }
}