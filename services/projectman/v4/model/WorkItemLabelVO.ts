

export class WorkItemLabelVO {
    public id?: string;
    public category?: string;
    private 'label_type'?: string;
    public color?: string;
    public title?: string;
    public type?: string;
    public state?: string;
    private 'modified_by'?: string;
    public constructor() { 
    }
    public withId(id: string): WorkItemLabelVO {
        this['id'] = id;
        return this;
    }
    public withCategory(category: string): WorkItemLabelVO {
        this['category'] = category;
        return this;
    }
    public withLabelType(labelType: string): WorkItemLabelVO {
        this['label_type'] = labelType;
        return this;
    }
    public set labelType(labelType: string  | undefined) {
        this['label_type'] = labelType;
    }
    public get labelType(): string | undefined {
        return this['label_type'];
    }
    public withColor(color: string): WorkItemLabelVO {
        this['color'] = color;
        return this;
    }
    public withTitle(title: string): WorkItemLabelVO {
        this['title'] = title;
        return this;
    }
    public withType(type: string): WorkItemLabelVO {
        this['type'] = type;
        return this;
    }
    public withState(state: string): WorkItemLabelVO {
        this['state'] = state;
        return this;
    }
    public withModifiedBy(modifiedBy: string): WorkItemLabelVO {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
}