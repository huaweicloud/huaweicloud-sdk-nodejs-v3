

export class StorageInfoDOV5 {
    private 'used_space_length'?: number;
    private 'used_space'?: string;
    private 'files_count'?: number;
    public constructor() { 
    }
    public withUsedSpaceLength(usedSpaceLength: number): StorageInfoDOV5 {
        this['used_space_length'] = usedSpaceLength;
        return this;
    }
    public set usedSpaceLength(usedSpaceLength: number  | undefined) {
        this['used_space_length'] = usedSpaceLength;
    }
    public get usedSpaceLength(): number | undefined {
        return this['used_space_length'];
    }
    public withUsedSpace(usedSpace: string): StorageInfoDOV5 {
        this['used_space'] = usedSpace;
        return this;
    }
    public set usedSpace(usedSpace: string  | undefined) {
        this['used_space'] = usedSpace;
    }
    public get usedSpace(): string | undefined {
        return this['used_space'];
    }
    public withFilesCount(filesCount: number): StorageInfoDOV5 {
        this['files_count'] = filesCount;
        return this;
    }
    public set filesCount(filesCount: number  | undefined) {
        this['files_count'] = filesCount;
    }
    public get filesCount(): number | undefined {
        return this['files_count'];
    }
}