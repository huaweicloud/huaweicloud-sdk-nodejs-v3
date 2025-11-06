

export class ManageableGroupDto {
    private 'full_name'?: string;
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withFullName(fullName: string): ManageableGroupDto {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: string  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): string | undefined {
        return this['full_name'];
    }
    public withId(id: number): ManageableGroupDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ManageableGroupDto {
        this['name'] = name;
        return this;
    }
}