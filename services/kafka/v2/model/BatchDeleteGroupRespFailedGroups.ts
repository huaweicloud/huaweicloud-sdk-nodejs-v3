

export class BatchDeleteGroupRespFailedGroups {
    private 'group_id'?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): BatchDeleteGroupRespFailedGroups {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withErrorMessage(errorMessage: string): BatchDeleteGroupRespFailedGroups {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}