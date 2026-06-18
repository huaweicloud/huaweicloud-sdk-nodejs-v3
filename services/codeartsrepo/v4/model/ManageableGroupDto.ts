

export class ManageableGroupDto {
    private 'full_name'?: string;
    public id?: number;
    public name?: string;
    private 'full_path'?: string;
    public path?: string;
    public visibility?: ManageableGroupDtoVisibilityEnum | string;
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
    public withFullPath(fullPath: string): ManageableGroupDto {
        this['full_path'] = fullPath;
        return this;
    }
    public set fullPath(fullPath: string  | undefined) {
        this['full_path'] = fullPath;
    }
    public get fullPath(): string | undefined {
        return this['full_path'];
    }
    public withPath(path: string): ManageableGroupDto {
        this['path'] = path;
        return this;
    }
    public withVisibility(visibility: ManageableGroupDtoVisibilityEnum | string): ManageableGroupDto {
        this['visibility'] = visibility;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ManageableGroupDtoVisibilityEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
