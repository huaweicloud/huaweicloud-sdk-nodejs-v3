

export class UrlDTO {
    public name?: string;
    public contains?: boolean;
    public constructor() { 
    }
    public withName(name: string): UrlDTO {
        this['name'] = name;
        return this;
    }
    public withContains(contains: boolean): UrlDTO {
        this['contains'] = contains;
        return this;
    }
}