

export class DirectoryDTO {
    private 'directory_id'?: string;
    private 'directory_name'?: string;
    public constructor() { 
    }
    public withDirectoryId(directoryId: string): DirectoryDTO {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: string  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): string | undefined {
        return this['directory_id'];
    }
    public withDirectoryName(directoryName: string): DirectoryDTO {
        this['directory_name'] = directoryName;
        return this;
    }
    public set directoryName(directoryName: string  | undefined) {
        this['directory_name'] = directoryName;
    }
    public get directoryName(): string | undefined {
        return this['directory_name'];
    }
}