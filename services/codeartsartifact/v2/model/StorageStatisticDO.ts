

export class StorageStatisticDO {
    public filesCount?: number;
    public usedSpaceLength?: number;
    public usedSpace?: string;
    public summaryDate?: string;
    public foldersCount?: number;
    public itemsCount?: number;
    public constructor() { 
    }
    public withFilesCount(filesCount: number): StorageStatisticDO {
        this['filesCount'] = filesCount;
        return this;
    }
    public withUsedSpaceLength(usedSpaceLength: number): StorageStatisticDO {
        this['usedSpaceLength'] = usedSpaceLength;
        return this;
    }
    public withUsedSpace(usedSpace: string): StorageStatisticDO {
        this['usedSpace'] = usedSpace;
        return this;
    }
    public withSummaryDate(summaryDate: string): StorageStatisticDO {
        this['summaryDate'] = summaryDate;
        return this;
    }
    public withFoldersCount(foldersCount: number): StorageStatisticDO {
        this['foldersCount'] = foldersCount;
        return this;
    }
    public withItemsCount(itemsCount: number): StorageStatisticDO {
        this['itemsCount'] = itemsCount;
        return this;
    }
}