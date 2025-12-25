

export class DownloadFolderInfo {
    public filesCount?: number;
    public usedSpace?: string;
    public constructor() { 
    }
    public withFilesCount(filesCount: number): DownloadFolderInfo {
        this['filesCount'] = filesCount;
        return this;
    }
    public withUsedSpace(usedSpace: string): DownloadFolderInfo {
        this['usedSpace'] = usedSpace;
        return this;
    }
}