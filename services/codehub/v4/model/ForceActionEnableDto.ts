

export class ForceActionEnableDto {
    public name?: string;
    public enable?: boolean;
    public constructor() { 
    }
    public withName(name: string): ForceActionEnableDto {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: boolean): ForceActionEnableDto {
        this['enable'] = enable;
        return this;
    }
}