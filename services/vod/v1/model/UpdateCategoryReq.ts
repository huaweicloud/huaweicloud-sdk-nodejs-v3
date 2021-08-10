

export class UpdateCategoryReq {
    public name: string;
    public id: number;
    public constructor(name?: any, id?: any) { 
        this['name'] = name;
        this['id'] = id;
    }
    public withName(name: string): UpdateCategoryReq {
        this['name'] = name;
        return this;
    }
    public withId(id: number): UpdateCategoryReq {
        this['id'] = id;
        return this;
    }
}