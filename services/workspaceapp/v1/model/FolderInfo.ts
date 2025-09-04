

export class FolderInfo {
    public prefix?: string;
    private 'inode_no'?: number;
    public constructor() { 
    }
    public withPrefix(prefix: string): FolderInfo {
        this['prefix'] = prefix;
        return this;
    }
    public withInodeNo(inodeNo: number): FolderInfo {
        this['inode_no'] = inodeNo;
        return this;
    }
    public set inodeNo(inodeNo: number  | undefined) {
        this['inode_no'] = inodeNo;
    }
    public get inodeNo(): number | undefined {
        return this['inode_no'];
    }
}