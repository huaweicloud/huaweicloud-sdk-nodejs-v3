

export class CreateTagReq {
    public name?: string;
    public color?: string;
    public constructor(name?: string, color?: string) { 
        this['name'] = name;
        this['color'] = color;
    }
    public withName(name: string): CreateTagReq {
        this['name'] = name;
        return this;
    }
    public withColor(color: string): CreateTagReq {
        this['color'] = color;
        return this;
    }
}