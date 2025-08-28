

export class SupportAzsInfo {
    public code?: string;
    public name?: string;
    public favored?: boolean;
    public constructor() { 
    }
    public withCode(code: string): SupportAzsInfo {
        this['code'] = code;
        return this;
    }
    public withName(name: string): SupportAzsInfo {
        this['name'] = name;
        return this;
    }
    public withFavored(favored: boolean): SupportAzsInfo {
        this['favored'] = favored;
        return this;
    }
}