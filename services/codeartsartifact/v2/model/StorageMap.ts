

export class StorageMap {
    public totalStorage?: string;
    public totalCount?: number;
    public constructor() { 
    }
    public withTotalStorage(totalStorage: string): StorageMap {
        this['totalStorage'] = totalStorage;
        return this;
    }
    public withTotalCount(totalCount: number): StorageMap {
        this['totalCount'] = totalCount;
        return this;
    }
}