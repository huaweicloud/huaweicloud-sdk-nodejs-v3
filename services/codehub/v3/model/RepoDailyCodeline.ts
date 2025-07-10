

export class RepoDailyCodeline {
    public additions?: number;
    public date?: string;
    public deletions?: number;
    public constructor() { 
    }
    public withAdditions(additions: number): RepoDailyCodeline {
        this['additions'] = additions;
        return this;
    }
    public withDate(date: string): RepoDailyCodeline {
        this['date'] = date;
        return this;
    }
    public withDeletions(deletions: number): RepoDailyCodeline {
        this['deletions'] = deletions;
        return this;
    }
}