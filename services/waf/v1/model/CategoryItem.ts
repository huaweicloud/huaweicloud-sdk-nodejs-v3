import { SubcategoryItem } from './SubcategoryItem';


export class CategoryItem {
    public category?: string;
    public name?: string;
    public subcategories?: Array<SubcategoryItem>;
    public constructor() { 
    }
    public withCategory(category: string): CategoryItem {
        this['category'] = category;
        return this;
    }
    public withName(name: string): CategoryItem {
        this['name'] = name;
        return this;
    }
    public withSubcategories(subcategories: Array<SubcategoryItem>): CategoryItem {
        this['subcategories'] = subcategories;
        return this;
    }
}