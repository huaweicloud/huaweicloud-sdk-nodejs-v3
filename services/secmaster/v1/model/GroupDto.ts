

export class GroupDto {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): GroupDto {
        this['name'] = name;
        return this;
    }
}