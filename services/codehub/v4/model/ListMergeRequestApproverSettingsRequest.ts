

export class ListMergeRequestApproverSettingsRequest {
    private 'repository_id'?: number;
    private 'target_type'?: ListMergeRequestApproverSettingsRequestTargetTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestApproverSettingsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTargetType(targetType: ListMergeRequestApproverSettingsRequestTargetTypeEnum | string): ListMergeRequestApproverSettingsRequest {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: ListMergeRequestApproverSettingsRequestTargetTypeEnum | string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): ListMergeRequestApproverSettingsRequestTargetTypeEnum | string | undefined {
        return this['target_type'];
    }
    public withOffset(offset: number): ListMergeRequestApproverSettingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestApproverSettingsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMergeRequestApproverSettingsRequestTargetTypeEnum {
    BRANCH = 'branch',
    FILE = 'file',
    PROJECT = 'project'
}
