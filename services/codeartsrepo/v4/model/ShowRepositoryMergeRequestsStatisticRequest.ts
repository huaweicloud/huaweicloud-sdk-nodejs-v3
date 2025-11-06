

export class ShowRepositoryMergeRequestsStatisticRequest {
    private 'repository_id'?: number;
    public iids?: string;
    public fields?: ShowRepositoryMergeRequestsStatisticRequestFieldsEnum | string;
    public constructor(repositoryId?: number, iids?: string) { 
        this['repository_id'] = repositoryId;
        this['iids'] = iids;
    }
    public withRepositoryId(repositoryId: number): ShowRepositoryMergeRequestsStatisticRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withIids(iids: string): ShowRepositoryMergeRequestsStatisticRequest {
        this['iids'] = iids;
        return this;
    }
    public withFields(fields: ShowRepositoryMergeRequestsStatisticRequestFieldsEnum | string): ShowRepositoryMergeRequestsStatisticRequest {
        this['fields'] = fields;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryMergeRequestsStatisticRequestFieldsEnum {
    COMMITS_COUNT = 'commits_count',
    CHANGED_FILES_COUNT = 'changed_files_count',
    NOTES_COUNT = 'notes_count',
    CHANGED_LINES_COUNT = 'changed_lines_count'
}
