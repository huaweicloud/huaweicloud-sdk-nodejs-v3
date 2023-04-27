

export class DeleteMemberRequest {
    private 'backup_id': string | undefined;
    private 'member_id': string | undefined;
    public constructor(backupId?: any, memberId?: any) { 
        this['backup_id'] = backupId;
        this['member_id'] = memberId;
    }
    public withBackupId(backupId: string): DeleteMemberRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withMemberId(memberId: string): DeleteMemberRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId() {
        return this['member_id'];
    }
}