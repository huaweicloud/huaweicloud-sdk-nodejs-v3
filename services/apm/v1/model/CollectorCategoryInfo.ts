

export class CollectorCategoryInfo {
    private 'category_id'?: number;
    private 'category_name'?: string;
    private 'display_name'?: string;
    public sequence?: number;
    public constructor() { 
    }
    public withCategoryId(categoryId: number): CollectorCategoryInfo {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withCategoryName(categoryName: string): CollectorCategoryInfo {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string  | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName(): string | undefined {
        return this['category_name'];
    }
    public withDisplayName(displayName: string): CollectorCategoryInfo {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withSequence(sequence: number): CollectorCategoryInfo {
        this['sequence'] = sequence;
        return this;
    }
}