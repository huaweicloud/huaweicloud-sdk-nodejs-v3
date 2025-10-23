

export class ProtectedRefsUserGroupBasicDto {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): ProtectedRefsUserGroupBasicDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ProtectedRefsUserGroupBasicDto {
        this['name'] = name;
        return this;
    }
}