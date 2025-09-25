

export class NodeLabelInfoResponse {
    public label?: string;
    public children?: Array<string>;
    public constructor() { 
    }
    public withLabel(label: string): NodeLabelInfoResponse {
        this['label'] = label;
        return this;
    }
    public withChildren(children: Array<string>): NodeLabelInfoResponse {
        this['children'] = children;
        return this;
    }
}