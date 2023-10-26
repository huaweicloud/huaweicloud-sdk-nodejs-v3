

export class ListLabelValuesAomPromGetRequest {
    private 'label_name'?: string;
    public constructor(labelName?: string) { 
        this['label_name'] = labelName;
    }
    public withLabelName(labelName: string): ListLabelValuesAomPromGetRequest {
        this['label_name'] = labelName;
        return this;
    }
    public set labelName(labelName: string  | undefined) {
        this['label_name'] = labelName;
    }
    public get labelName(): string | undefined {
        return this['label_name'];
    }
}