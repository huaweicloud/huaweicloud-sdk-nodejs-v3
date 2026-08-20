

export class ListIpdLabelsRequest {
    private 'project_id'?: string;
    private 'label_type'?: ListIpdLabelsRequestLabelTypeEnum | string;
    public title?: string;
    private 'category_types'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListIpdLabelsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLabelType(labelType: ListIpdLabelsRequestLabelTypeEnum | string): ListIpdLabelsRequest {
        this['label_type'] = labelType;
        return this;
    }
    public set labelType(labelType: ListIpdLabelsRequestLabelTypeEnum | string  | undefined) {
        this['label_type'] = labelType;
    }
    public get labelType(): ListIpdLabelsRequestLabelTypeEnum | string | undefined {
        return this['label_type'];
    }
    public withTitle(title: string): ListIpdLabelsRequest {
        this['title'] = title;
        return this;
    }
    public withCategoryTypes(categoryTypes: string): ListIpdLabelsRequest {
        this['category_types'] = categoryTypes;
        return this;
    }
    public set categoryTypes(categoryTypes: string  | undefined) {
        this['category_types'] = categoryTypes;
    }
    public get categoryTypes(): string | undefined {
        return this['category_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListIpdLabelsRequestLabelTypeEnum {
    FEATURE = 'feature',
    RAW_REQUIREMENT = 'raw requirement',
    REQUIREMENT = 'requirement',
    TASK = 'task',
    BUG = 'bug'
}
