

export class SubCategoryDetailVO {
    public id?: number;
    public name?: string;
    public type?: string;
    public pid?: string;
    private 'sub_categories'?: object;
    public constructor() { 
    }
    public withId(id: number): SubCategoryDetailVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubCategoryDetailVO {
        this['name'] = name;
        return this;
    }
    public withType(type: string): SubCategoryDetailVO {
        this['type'] = type;
        return this;
    }
    public withPid(pid: string): SubCategoryDetailVO {
        this['pid'] = pid;
        return this;
    }
    public withSubCategories(subCategories: object): SubCategoryDetailVO {
        this['sub_categories'] = subCategories;
        return this;
    }
    public set subCategories(subCategories: object  | undefined) {
        this['sub_categories'] = subCategories;
    }
    public get subCategories(): object | undefined {
        return this['sub_categories'];
    }
}