

export class AppUpdateDTO {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): AppUpdateDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AppUpdateDTO {
        this['description'] = description;
        return this;
    }
}