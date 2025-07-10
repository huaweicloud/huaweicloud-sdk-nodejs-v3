

export class GroupsManageableDto {
    private 'full_name'?: string;
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withFullName(fullName: string): GroupsManageableDto {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: string  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): string | undefined {
        return this['full_name'];
    }
    public withId(id: number): GroupsManageableDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupsManageableDto {
        this['name'] = name;
        return this;
    }
}