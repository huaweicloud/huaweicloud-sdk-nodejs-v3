

export class NamespaceBasicDto {
    public id?: number;
    public name?: string;
    public path?: string;
    private 'develop_mode'?: string;
    public region?: string;
    public cell?: string;
    public kind?: string;
    private 'full_path'?: string;
    private 'full_name'?: string;
    private 'parent_id'?: number;
    private 'visibility_level'?: number;
    private 'enable_file_control'?: boolean;
    private 'owner_id'?: number;
    public constructor() { 
    }
    public withId(id: number): NamespaceBasicDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NamespaceBasicDto {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): NamespaceBasicDto {
        this['path'] = path;
        return this;
    }
    public withDevelopMode(developMode: string): NamespaceBasicDto {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): string | undefined {
        return this['develop_mode'];
    }
    public withRegion(region: string): NamespaceBasicDto {
        this['region'] = region;
        return this;
    }
    public withCell(cell: string): NamespaceBasicDto {
        this['cell'] = cell;
        return this;
    }
    public withKind(kind: string): NamespaceBasicDto {
        this['kind'] = kind;
        return this;
    }
    public withFullPath(fullPath: string): NamespaceBasicDto {
        this['full_path'] = fullPath;
        return this;
    }
    public set fullPath(fullPath: string  | undefined) {
        this['full_path'] = fullPath;
    }
    public get fullPath(): string | undefined {
        return this['full_path'];
    }
    public withFullName(fullName: string): NamespaceBasicDto {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: string  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): string | undefined {
        return this['full_name'];
    }
    public withParentId(parentId: number): NamespaceBasicDto {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
    public withVisibilityLevel(visibilityLevel: number): NamespaceBasicDto {
        this['visibility_level'] = visibilityLevel;
        return this;
    }
    public set visibilityLevel(visibilityLevel: number  | undefined) {
        this['visibility_level'] = visibilityLevel;
    }
    public get visibilityLevel(): number | undefined {
        return this['visibility_level'];
    }
    public withEnableFileControl(enableFileControl: boolean): NamespaceBasicDto {
        this['enable_file_control'] = enableFileControl;
        return this;
    }
    public set enableFileControl(enableFileControl: boolean  | undefined) {
        this['enable_file_control'] = enableFileControl;
    }
    public get enableFileControl(): boolean | undefined {
        return this['enable_file_control'];
    }
    public withOwnerId(ownerId: number): NamespaceBasicDto {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: number  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): number | undefined {
        return this['owner_id'];
    }
}