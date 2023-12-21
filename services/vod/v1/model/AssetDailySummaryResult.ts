

export class AssetDailySummaryResult {
    public date?: string;
    public link?: string;
    public constructor() { 
    }
    public withDate(date: string): AssetDailySummaryResult {
        this['date'] = date;
        return this;
    }
    public withLink(link: string): AssetDailySummaryResult {
        this['link'] = link;
        return this;
    }
}