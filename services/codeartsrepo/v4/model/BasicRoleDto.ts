

export class BasicRoleDto {
    public id?: number;
    public name?: string;
    private 'related_role_id'?: string;
    private 'chinese_name'?: string;
    public constructor() { 
    }
    public withId(id: number): BasicRoleDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BasicRoleDto {
        this['name'] = name;
        return this;
    }
    public withRelatedRoleId(relatedRoleId: string): BasicRoleDto {
        this['related_role_id'] = relatedRoleId;
        return this;
    }
    public set relatedRoleId(relatedRoleId: string  | undefined) {
        this['related_role_id'] = relatedRoleId;
    }
    public get relatedRoleId(): string | undefined {
        return this['related_role_id'];
    }
    public withChineseName(chineseName: string): BasicRoleDto {
        this['chinese_name'] = chineseName;
        return this;
    }
    public set chineseName(chineseName: string  | undefined) {
        this['chinese_name'] = chineseName;
    }
    public get chineseName(): string | undefined {
        return this['chinese_name'];
    }
}