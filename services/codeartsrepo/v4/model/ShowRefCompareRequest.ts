

export class ShowRefCompareRequest {
    private 'repository_id'?: number;
    public from?: string;
    public to?: string;
    private 'compare_type'?: ShowRefCompareRequestCompareTypeEnum | string;
    private 'target_id'?: number;
    public straight?: boolean;
    private 'ignore_whitespace_change'?: boolean;
    public view?: ShowRefCompareRequestViewEnum | string;
    private 'only_count'?: boolean;
    private 'file_path'?: string;
    private 'additional_fields'?: ShowRefCompareRequestAdditionalFieldsEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, from?: string, to?: string) { 
        this['repository_id'] = repositoryId;
        this['from'] = from;
        this['to'] = to;
    }
    public withRepositoryId(repositoryId: number): ShowRefCompareRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withFrom(from: string): ShowRefCompareRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): ShowRefCompareRequest {
        this['to'] = to;
        return this;
    }
    public withCompareType(compareType: ShowRefCompareRequestCompareTypeEnum | string): ShowRefCompareRequest {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: ShowRefCompareRequestCompareTypeEnum | string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): ShowRefCompareRequestCompareTypeEnum | string | undefined {
        return this['compare_type'];
    }
    public withTargetId(targetId: number): ShowRefCompareRequest {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: number  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): number | undefined {
        return this['target_id'];
    }
    public withStraight(straight: boolean): ShowRefCompareRequest {
        this['straight'] = straight;
        return this;
    }
    public withIgnoreWhitespaceChange(ignoreWhitespaceChange: boolean): ShowRefCompareRequest {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
        return this;
    }
    public set ignoreWhitespaceChange(ignoreWhitespaceChange: boolean  | undefined) {
        this['ignore_whitespace_change'] = ignoreWhitespaceChange;
    }
    public get ignoreWhitespaceChange(): boolean | undefined {
        return this['ignore_whitespace_change'];
    }
    public withView(view: ShowRefCompareRequestViewEnum | string): ShowRefCompareRequest {
        this['view'] = view;
        return this;
    }
    public withOnlyCount(onlyCount: boolean): ShowRefCompareRequest {
        this['only_count'] = onlyCount;
        return this;
    }
    public set onlyCount(onlyCount: boolean  | undefined) {
        this['only_count'] = onlyCount;
    }
    public get onlyCount(): boolean | undefined {
        return this['only_count'];
    }
    public withFilePath(filePath: string): ShowRefCompareRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withAdditionalFields(additionalFields: ShowRefCompareRequestAdditionalFieldsEnum | string): ShowRefCompareRequest {
        this['additional_fields'] = additionalFields;
        return this;
    }
    public set additionalFields(additionalFields: ShowRefCompareRequestAdditionalFieldsEnum | string  | undefined) {
        this['additional_fields'] = additionalFields;
    }
    public get additionalFields(): ShowRefCompareRequestAdditionalFieldsEnum | string | undefined {
        return this['additional_fields'];
    }
    public withOffset(offset: number): ShowRefCompareRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowRefCompareRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRefCompareRequestCompareTypeEnum {
    BRANCH = 'branch',
    COMMIT = 'commit',
    TAG = 'tag'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowRefCompareRequestViewEnum {
    COUNT = 'count',
    COMMITS = 'commits',
    DIFFS = 'diffs',
    FILES = 'files',
    COMMITSDIFFS = 'commits,diffs'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowRefCompareRequestAdditionalFieldsEnum {
    CHANGE_LINES = 'change_lines'
}
