import { SubCategoryDetailVO } from './SubCategoryDetailVO';


export class CategoryDetailVO {
    public id?: number;
    public name?: string;
    public type?: string;
    public pid?: string;
    private 'sub_categories'?: Array<SubCategoryDetailVO>;
    public constructor() { 
    }
    public withId(id: number): CategoryDetailVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CategoryDetailVO {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CategoryDetailVO {
        this['type'] = type;
        return this;
    }
    public withPid(pid: string): CategoryDetailVO {
        this['pid'] = pid;
        return this;
    }
    public withSubCategories(subCategories: Array<SubCategoryDetailVO>): CategoryDetailVO {
        this['sub_categories'] = subCategories;
        return this;
    }
    public set subCategories(subCategories: Array<SubCategoryDetailVO>  | undefined) {
        this['sub_categories'] = subCategories;
    }
    public get subCategories(): Array<SubCategoryDetailVO> | undefined {
        return this['sub_categories'];
    }
}