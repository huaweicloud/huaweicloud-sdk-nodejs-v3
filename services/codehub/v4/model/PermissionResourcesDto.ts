

export class PermissionResourcesDto {
    public id?: number;
    public name?: string;
    private 'name_cn'?: string;
    private 'resource_name_display'?: string;
    private 'resource_name_cn_display'?: string;
    public path?: string;
    public scope?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): PermissionResourcesDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PermissionResourcesDto {
        this['name'] = name;
        return this;
    }
    public withNameCn(nameCn: string): PermissionResourcesDto {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withResourceNameDisplay(resourceNameDisplay: string): PermissionResourcesDto {
        this['resource_name_display'] = resourceNameDisplay;
        return this;
    }
    public set resourceNameDisplay(resourceNameDisplay: string  | undefined) {
        this['resource_name_display'] = resourceNameDisplay;
    }
    public get resourceNameDisplay(): string | undefined {
        return this['resource_name_display'];
    }
    public withResourceNameCnDisplay(resourceNameCnDisplay: string): PermissionResourcesDto {
        this['resource_name_cn_display'] = resourceNameCnDisplay;
        return this;
    }
    public set resourceNameCnDisplay(resourceNameCnDisplay: string  | undefined) {
        this['resource_name_cn_display'] = resourceNameCnDisplay;
    }
    public get resourceNameCnDisplay(): string | undefined {
        return this['resource_name_cn_display'];
    }
    public withPath(path: string): PermissionResourcesDto {
        this['path'] = path;
        return this;
    }
    public withScope(scope: string): PermissionResourcesDto {
        this['scope'] = scope;
        return this;
    }
    public withCreatedAt(createdAt: string): PermissionResourcesDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): PermissionResourcesDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}