import { AddMembersReq } from './AddMembersReq';


export class AddMemberRequest {
    private 'backup_id'?: string;
    public body?: AddMembersReq;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): AddMemberRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBody(body: AddMembersReq): AddMemberRequest {
        this['body'] = body;
        return this;
    }
}