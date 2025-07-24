

export class UpdateAssetTreeParam {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): UpdateAssetTreeParam {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateAssetTreeParam {
        this['name'] = name;
        return this;
    }
}