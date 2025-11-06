

export class ShowFlavorDetailRspFlavorDetail {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ShowFlavorDetailRspFlavorDetail {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ShowFlavorDetailRspFlavorDetail {
        this['value'] = value;
        return this;
    }
}