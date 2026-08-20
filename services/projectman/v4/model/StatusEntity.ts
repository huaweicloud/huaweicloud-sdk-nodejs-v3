

export class StatusEntity {
    public id?: string;
    public belonging?: string;
    private 'display_value'?: string;
    public code?: string;
    private 'created_by'?: string;
    private 'created_time'?: string;
    private 'modified_by'?: string;
    private 'modified_time'?: string;
    private 'category_code'?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): StatusEntity {
        this['id'] = id;
        return this;
    }
    public withBelonging(belonging: string): StatusEntity {
        this['belonging'] = belonging;
        return this;
    }
    public withDisplayValue(displayValue: string): StatusEntity {
        this['display_value'] = displayValue;
        return this;
    }
    public set displayValue(displayValue: string  | undefined) {
        this['display_value'] = displayValue;
    }
    public get displayValue(): string | undefined {
        return this['display_value'];
    }
    public withCode(code: string): StatusEntity {
        this['code'] = code;
        return this;
    }
    public withCreatedBy(createdBy: string): StatusEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedTime(createdTime: string): StatusEntity {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withModifiedBy(modifiedBy: string): StatusEntity {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withModifiedTime(modifiedTime: string): StatusEntity {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withCategoryCode(categoryCode: Array<string>): StatusEntity {
        this['category_code'] = categoryCode;
        return this;
    }
    public set categoryCode(categoryCode: Array<string>  | undefined) {
        this['category_code'] = categoryCode;
    }
    public get categoryCode(): Array<string> | undefined {
        return this['category_code'];
    }
}