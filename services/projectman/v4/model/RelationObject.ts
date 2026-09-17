

export class RelationObject {
    private 'object_type'?: string;
    public categories?: Array<string>;
    public constructor() { 
    }
    public withObjectType(objectType: string): RelationObject {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withCategories(categories: Array<string>): RelationObject {
        this['categories'] = categories;
        return this;
    }
}