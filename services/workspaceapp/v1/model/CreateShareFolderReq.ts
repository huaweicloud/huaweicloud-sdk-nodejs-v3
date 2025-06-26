

export class CreateShareFolderReq {
    private 'folder_name'?: string;
    public constructor() { 
    }
    public withFolderName(folderName: string): CreateShareFolderReq {
        this['folder_name'] = folderName;
        return this;
    }
    public set folderName(folderName: string  | undefined) {
        this['folder_name'] = folderName;
    }
    public get folderName(): string | undefined {
        return this['folder_name'];
    }
}