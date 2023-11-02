

export class ObsFolder {
    private 'folder_name'?: string;
    private 'folder_guid'?: string;
    private 'folder_qualified_name'?: string;
    private 'object_count'?: number;
    private 'data_size'?: number;
    public constructor() { 
    }
    public withFolderName(folderName: string): ObsFolder {
        this['folder_name'] = folderName;
        return this;
    }
    public set folderName(folderName: string  | undefined) {
        this['folder_name'] = folderName;
    }
    public get folderName(): string | undefined {
        return this['folder_name'];
    }
    public withFolderGuid(folderGuid: string): ObsFolder {
        this['folder_guid'] = folderGuid;
        return this;
    }
    public set folderGuid(folderGuid: string  | undefined) {
        this['folder_guid'] = folderGuid;
    }
    public get folderGuid(): string | undefined {
        return this['folder_guid'];
    }
    public withFolderQualifiedName(folderQualifiedName: string): ObsFolder {
        this['folder_qualified_name'] = folderQualifiedName;
        return this;
    }
    public set folderQualifiedName(folderQualifiedName: string  | undefined) {
        this['folder_qualified_name'] = folderQualifiedName;
    }
    public get folderQualifiedName(): string | undefined {
        return this['folder_qualified_name'];
    }
    public withObjectCount(objectCount: number): ObsFolder {
        this['object_count'] = objectCount;
        return this;
    }
    public set objectCount(objectCount: number  | undefined) {
        this['object_count'] = objectCount;
    }
    public get objectCount(): number | undefined {
        return this['object_count'];
    }
    public withDataSize(dataSize: number): ObsFolder {
        this['data_size'] = dataSize;
        return this;
    }
    public set dataSize(dataSize: number  | undefined) {
        this['data_size'] = dataSize;
    }
    public get dataSize(): number | undefined {
        return this['data_size'];
    }
}