

export class LatestVersionFilesCount {
    public count?: number;
    public constructor() { 
    }
    public withCount(count: number): LatestVersionFilesCount {
        this['count'] = count;
        return this;
    }
}