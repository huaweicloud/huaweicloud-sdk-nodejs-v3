

export class AttachModelGroupInfo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AttachModelGroupInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AttachModelGroupInfo {
        this['name'] = name;
        return this;
    }
}