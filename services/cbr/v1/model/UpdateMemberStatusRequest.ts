import { UpdateMember } from './UpdateMember';


export class UpdateMemberStatusRequest {
    private 'member_id'?: string;
    private 'backup_id'?: string;
    public body?: UpdateMember;
    public constructor(memberId?: string, backupId?: string) { 
        this['member_id'] = memberId;
        this['backup_id'] = backupId;
    }
    public withMemberId(memberId: string): UpdateMemberStatusRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withBackupId(backupId: string): UpdateMemberStatusRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBody(body: UpdateMember): UpdateMemberStatusRequest {
        this['body'] = body;
        return this;
    }
}