

export class DeleteRepoMemberRequest {
    private 'member_id'?: string;
    private 'repository_uuid'?: string;
    public constructor(memberId?: string, repositoryUuid?: string) { 
        this['member_id'] = memberId;
        this['repository_uuid'] = repositoryUuid;
    }
    public withMemberId(memberId: string): DeleteRepoMemberRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withRepositoryUuid(repositoryUuid: string): DeleteRepoMemberRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
}