

export class GroupNodeInfo {
    public id?: string;
    public name?: string;
    public az?: string;
    public constructor(id?: string, name?: string, az?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['az'] = az;
    }
    public withId(id: string): GroupNodeInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupNodeInfo {
        this['name'] = name;
        return this;
    }
    public withAz(az: string): GroupNodeInfo {
        this['az'] = az;
        return this;
    }
}