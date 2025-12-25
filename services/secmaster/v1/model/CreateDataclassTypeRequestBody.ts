

export class CreateDataclassTypeRequestBody {
    private 'sub_category'?: string;
    private 'sub_category_code'?: string;
    public category?: string;
    private 'category_code'?: string;
    public name?: string;
    private 'business_code'?: string;
    private 'dataclass_business_code'?: string;
    public description?: string;
    public level?: CreateDataclassTypeRequestBodyLevelEnum | number;
    public enabled?: boolean;
    public sla?: number;
    public constructor(enabled?: boolean, sla?: number) { 
        this['enabled'] = enabled;
        this['sla'] = sla;
    }
    public withSubCategory(subCategory: string): CreateDataclassTypeRequestBody {
        this['sub_category'] = subCategory;
        return this;
    }
    public set subCategory(subCategory: string  | undefined) {
        this['sub_category'] = subCategory;
    }
    public get subCategory(): string | undefined {
        return this['sub_category'];
    }
    public withSubCategoryCode(subCategoryCode: string): CreateDataclassTypeRequestBody {
        this['sub_category_code'] = subCategoryCode;
        return this;
    }
    public set subCategoryCode(subCategoryCode: string  | undefined) {
        this['sub_category_code'] = subCategoryCode;
    }
    public get subCategoryCode(): string | undefined {
        return this['sub_category_code'];
    }
    public withCategory(category: string): CreateDataclassTypeRequestBody {
        this['category'] = category;
        return this;
    }
    public withCategoryCode(categoryCode: string): CreateDataclassTypeRequestBody {
        this['category_code'] = categoryCode;
        return this;
    }
    public set categoryCode(categoryCode: string  | undefined) {
        this['category_code'] = categoryCode;
    }
    public get categoryCode(): string | undefined {
        return this['category_code'];
    }
    public withName(name: string): CreateDataclassTypeRequestBody {
        this['name'] = name;
        return this;
    }
    public withBusinessCode(businessCode: string): CreateDataclassTypeRequestBody {
        this['business_code'] = businessCode;
        return this;
    }
    public set businessCode(businessCode: string  | undefined) {
        this['business_code'] = businessCode;
    }
    public get businessCode(): string | undefined {
        return this['business_code'];
    }
    public withDataclassBusinessCode(dataclassBusinessCode: string): CreateDataclassTypeRequestBody {
        this['dataclass_business_code'] = dataclassBusinessCode;
        return this;
    }
    public set dataclassBusinessCode(dataclassBusinessCode: string  | undefined) {
        this['dataclass_business_code'] = dataclassBusinessCode;
    }
    public get dataclassBusinessCode(): string | undefined {
        return this['dataclass_business_code'];
    }
    public withDescription(description: string): CreateDataclassTypeRequestBody {
        this['description'] = description;
        return this;
    }
    public withLevel(level: CreateDataclassTypeRequestBodyLevelEnum | number): CreateDataclassTypeRequestBody {
        this['level'] = level;
        return this;
    }
    public withEnabled(enabled: boolean): CreateDataclassTypeRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withSla(sla: number): CreateDataclassTypeRequestBody {
        this['sla'] = sla;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDataclassTypeRequestBodyLevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
