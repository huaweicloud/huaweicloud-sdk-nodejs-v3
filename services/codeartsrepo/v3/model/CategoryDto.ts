

export class CategoryDto {
    public key?: string;
    private 'name_zh'?: string;
    private 'name_en'?: string;
    private 'sub_categories'?: Array<CategoryDto>;
    public constructor() { 
    }
    public withKey(key: string): CategoryDto {
        this['key'] = key;
        return this;
    }
    public withNameZh(nameZh: string): CategoryDto {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withNameEn(nameEn: string): CategoryDto {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withSubCategories(subCategories: Array<CategoryDto>): CategoryDto {
        this['sub_categories'] = subCategories;
        return this;
    }
    public set subCategories(subCategories: Array<CategoryDto>  | undefined) {
        this['sub_categories'] = subCategories;
    }
    public get subCategories(): Array<CategoryDto> | undefined {
        return this['sub_categories'];
    }
}