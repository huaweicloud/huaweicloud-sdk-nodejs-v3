

export class FolderRedirectionOptions {
    private 'relative_path'?: string;
    private 'storage_paths'?: string;
    private 'include_common_folders'?: number;
    public constructor() { 
    }
    public withRelativePath(relativePath: string): FolderRedirectionOptions {
        this['relative_path'] = relativePath;
        return this;
    }
    public set relativePath(relativePath: string  | undefined) {
        this['relative_path'] = relativePath;
    }
    public get relativePath(): string | undefined {
        return this['relative_path'];
    }
    public withStoragePaths(storagePaths: string): FolderRedirectionOptions {
        this['storage_paths'] = storagePaths;
        return this;
    }
    public set storagePaths(storagePaths: string  | undefined) {
        this['storage_paths'] = storagePaths;
    }
    public get storagePaths(): string | undefined {
        return this['storage_paths'];
    }
    public withIncludeCommonFolders(includeCommonFolders: number): FolderRedirectionOptions {
        this['include_common_folders'] = includeCommonFolders;
        return this;
    }
    public set includeCommonFolders(includeCommonFolders: number  | undefined) {
        this['include_common_folders'] = includeCommonFolders;
    }
    public get includeCommonFolders(): number | undefined {
        return this['include_common_folders'];
    }
}