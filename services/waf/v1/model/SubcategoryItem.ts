

export class SubcategoryItem {
    public subcategory?: string;
    public name?: string;
    public constructor() { 
    }
    public withSubcategory(subcategory: string): SubcategoryItem {
        this['subcategory'] = subcategory;
        return this;
    }
    public withName(name: string): SubcategoryItem {
        this['name'] = name;
        return this;
    }
}