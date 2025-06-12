

export class JobUpdateRecordListVoResultJobUpdateRecords {
    public id?: string;
    private 'update_number'?: number;
    private 'update_type'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'nick_name'?: string;
    private 'update_at'?: number;
    public constructor() { 
    }
    public withId(id: string): JobUpdateRecordListVoResultJobUpdateRecords {
        this['id'] = id;
        return this;
    }
    public withUpdateNumber(updateNumber: number): JobUpdateRecordListVoResultJobUpdateRecords {
        this['update_number'] = updateNumber;
        return this;
    }
    public set updateNumber(updateNumber: number  | undefined) {
        this['update_number'] = updateNumber;
    }
    public get updateNumber(): number | undefined {
        return this['update_number'];
    }
    public withUpdateType(updateType: string): JobUpdateRecordListVoResultJobUpdateRecords {
        this['update_type'] = updateType;
        return this;
    }
    public set updateType(updateType: string  | undefined) {
        this['update_type'] = updateType;
    }
    public get updateType(): string | undefined {
        return this['update_type'];
    }
    public withUserId(userId: string): JobUpdateRecordListVoResultJobUpdateRecords {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): JobUpdateRecordListVoResultJobUpdateRecords {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withNickName(nickName: string): JobUpdateRecordListVoResultJobUpdateRecords {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withUpdateAt(updateAt: number): JobUpdateRecordListVoResultJobUpdateRecords {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
}