

export class LabelInfo {
    public label?: string;
    public name?: string;
    public constructor() { 
    }
    public withLabel(label: string): LabelInfo {
        this['label'] = label;
        return this;
    }
    public withName(name: string): LabelInfo {
        this['name'] = name;
        return this;
    }
}