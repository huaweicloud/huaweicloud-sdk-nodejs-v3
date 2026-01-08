import { CategoryInfo } from './CategoryInfo';


export class QueryCategoryInfoRsp {
    public id?: number;
    public name?: string;
    private 'sub_categories'?: Array<CategoryInfo>;
    public constructor() { 
    }
    public withId(id: number): QueryCategoryInfoRsp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryCategoryInfoRsp {
        this['name'] = name;
        return this;
    }
    public withSubCategories(subCategories: Array<CategoryInfo>): QueryCategoryInfoRsp {
        this['sub_categories'] = subCategories;
        return this;
    }
    public set subCategories(subCategories: Array<CategoryInfo>  | undefined) {
        this['sub_categories'] = subCategories;
    }
    public get subCategories(): Array<CategoryInfo> | undefined {
        return this['sub_categories'];
    }
}