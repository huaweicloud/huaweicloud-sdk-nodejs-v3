

export class DateTitleDto {
    public day?: string;
    private 'commits_count'?: number;
    public constructor() { 
    }
    public withDay(day: string): DateTitleDto {
        this['day'] = day;
        return this;
    }
    public withCommitsCount(commitsCount: number): DateTitleDto {
        this['commits_count'] = commitsCount;
        return this;
    }
    public set commitsCount(commitsCount: number  | undefined) {
        this['commits_count'] = commitsCount;
    }
    public get commitsCount(): number | undefined {
        return this['commits_count'];
    }
}