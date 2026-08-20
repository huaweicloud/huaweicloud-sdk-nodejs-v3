

export class LabelParam {
    private 'label_type'?: LabelParamLabelTypeEnum | string;
    public color?: string;
    public title?: string;
    private 'category_types'?: Array<string>;
    public constructor(color?: string, title?: string, categoryTypes?: Array<string>) { 
        this['color'] = color;
        this['title'] = title;
        this['category_types'] = categoryTypes;
    }
    public withLabelType(labelType: LabelParamLabelTypeEnum | string): LabelParam {
        this['label_type'] = labelType;
        return this;
    }
    public set labelType(labelType: LabelParamLabelTypeEnum | string  | undefined) {
        this['label_type'] = labelType;
    }
    public get labelType(): LabelParamLabelTypeEnum | string | undefined {
        return this['label_type'];
    }
    public withColor(color: string): LabelParam {
        this['color'] = color;
        return this;
    }
    public withTitle(title: string): LabelParam {
        this['title'] = title;
        return this;
    }
    public withCategoryTypes(categoryTypes: Array<string>): LabelParam {
        this['category_types'] = categoryTypes;
        return this;
    }
    public set categoryTypes(categoryTypes: Array<string>  | undefined) {
        this['category_types'] = categoryTypes;
    }
    public get categoryTypes(): Array<string> | undefined {
        return this['category_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LabelParamLabelTypeEnum {
    FEATURE = 'feature',
    RAW_REQUIREMENT = 'raw requirement',
    REQUIREMENT = 'requirement',
    TASK = 'task',
    BUG = 'bug'
}
