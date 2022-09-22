

export class IpGroup {
    public id?: string;
    public name?: string;
    public size?: number;
    public constructor() { 
    }
    public withId(id: string): IpGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IpGroup {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): IpGroup {
        this['size'] = size;
        return this;
    }
}