

export class HwcEcsSecurityGroup {
    public id?: string;
    public name?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): HwcEcsSecurityGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HwcEcsSecurityGroup {
        this['name'] = name;
        return this;
    }
}