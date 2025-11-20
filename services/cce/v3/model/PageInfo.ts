

export class PageInfo {
    public currentCount?: number;
    public constructor(currentCount?: number) { 
        this['currentCount'] = currentCount;
    }
    public withCurrentCount(currentCount: number): PageInfo {
        this['currentCount'] = currentCount;
        return this;
    }
}