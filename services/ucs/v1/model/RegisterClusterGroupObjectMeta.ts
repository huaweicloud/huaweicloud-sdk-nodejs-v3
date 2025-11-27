

export class RegisterClusterGroupObjectMeta {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): RegisterClusterGroupObjectMeta {
        this['name'] = name;
        return this;
    }
}