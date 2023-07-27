

export class MicroserviceLabel {
    private 'label_name'?: string;
    private 'label_value'?: string;
    public constructor(labelName?: string, labelValue?: string) { 
        this['label_name'] = labelName;
        this['label_value'] = labelValue;
    }
    public withLabelName(labelName: string): MicroserviceLabel {
        this['label_name'] = labelName;
        return this;
    }
    public set labelName(labelName: string  | undefined) {
        this['label_name'] = labelName;
    }
    public get labelName(): string | undefined {
        return this['label_name'];
    }
    public withLabelValue(labelValue: string): MicroserviceLabel {
        this['label_value'] = labelValue;
        return this;
    }
    public set labelValue(labelValue: string  | undefined) {
        this['label_value'] = labelValue;
    }
    public get labelValue(): string | undefined {
        return this['label_value'];
    }
}