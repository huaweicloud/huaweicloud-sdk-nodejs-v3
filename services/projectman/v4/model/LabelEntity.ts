

export class LabelEntity {
    public id?: string;
    private 'label_type'?: string;
    public color?: string;
    public title?: string;
    public constructor() { 
    }
    public withId(id: string): LabelEntity {
        this['id'] = id;
        return this;
    }
    public withLabelType(labelType: string): LabelEntity {
        this['label_type'] = labelType;
        return this;
    }
    public set labelType(labelType: string  | undefined) {
        this['label_type'] = labelType;
    }
    public get labelType(): string | undefined {
        return this['label_type'];
    }
    public withColor(color: string): LabelEntity {
        this['color'] = color;
        return this;
    }
    public withTitle(title: string): LabelEntity {
        this['title'] = title;
        return this;
    }
}