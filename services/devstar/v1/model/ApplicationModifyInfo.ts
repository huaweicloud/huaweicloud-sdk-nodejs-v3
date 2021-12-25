

export class ApplicationModifyInfo {
    public name?: string;
    public description?: string;
    public icon?: string;
    public constructor() { 
    }
    public withName(name: string): ApplicationModifyInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ApplicationModifyInfo {
        this['description'] = description;
        return this;
    }
    public withIcon(icon: string): ApplicationModifyInfo {
        this['icon'] = icon;
        return this;
    }
}