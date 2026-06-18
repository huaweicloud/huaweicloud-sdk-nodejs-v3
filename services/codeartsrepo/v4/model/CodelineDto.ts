

export class CodelineDto {
    public additions?: number;
    public deletions?: number;
    public date?: string;
    public constructor() { 
    }
    public withAdditions(additions: number): CodelineDto {
        this['additions'] = additions;
        return this;
    }
    public withDeletions(deletions: number): CodelineDto {
        this['deletions'] = deletions;
        return this;
    }
    public withDate(date: string): CodelineDto {
        this['date'] = date;
        return this;
    }
}