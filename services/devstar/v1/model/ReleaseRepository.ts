

export class ReleaseRepository {
    public id?: string;
    public name?: string;
    private 'download_path'?: string;
    public size?: string;
    private 'category_name'?: string;
    private 'file_type'?: string;
    public created?: string;
    public updated?: string;
    public constructor() { 
    }
    public withId(id: string): ReleaseRepository {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ReleaseRepository {
        this['name'] = name;
        return this;
    }
    public withDownloadPath(downloadPath: string): ReleaseRepository {
        this['download_path'] = downloadPath;
        return this;
    }
    public set downloadPath(downloadPath: string  | undefined) {
        this['download_path'] = downloadPath;
    }
    public get downloadPath(): string | undefined {
        return this['download_path'];
    }
    public withSize(size: string): ReleaseRepository {
        this['size'] = size;
        return this;
    }
    public withCategoryName(categoryName: string): ReleaseRepository {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string  | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName(): string | undefined {
        return this['category_name'];
    }
    public withFileType(fileType: string): ReleaseRepository {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withCreated(created: string): ReleaseRepository {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ReleaseRepository {
        this['updated'] = updated;
        return this;
    }
}