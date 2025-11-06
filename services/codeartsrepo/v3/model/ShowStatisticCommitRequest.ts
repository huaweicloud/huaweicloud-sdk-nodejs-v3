

export class ShowStatisticCommitRequest {
    private 'repository_id'?: number;
    private 'ref_name'?: string;
    private 'begin_date'?: string;
    private 'end_date'?: string;
    public constructor(repositoryId?: number, refName?: string, beginDate?: string, endDate?: string) { 
        this['repository_id'] = repositoryId;
        this['ref_name'] = refName;
        this['begin_date'] = beginDate;
        this['end_date'] = endDate;
    }
    public withRepositoryId(repositoryId: number): ShowStatisticCommitRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRefName(refName: string): ShowStatisticCommitRequest {
        this['ref_name'] = refName;
        return this;
    }
    public set refName(refName: string  | undefined) {
        this['ref_name'] = refName;
    }
    public get refName(): string | undefined {
        return this['ref_name'];
    }
    public withBeginDate(beginDate: string): ShowStatisticCommitRequest {
        this['begin_date'] = beginDate;
        return this;
    }
    public set beginDate(beginDate: string  | undefined) {
        this['begin_date'] = beginDate;
    }
    public get beginDate(): string | undefined {
        return this['begin_date'];
    }
    public withEndDate(endDate: string): ShowStatisticCommitRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
}