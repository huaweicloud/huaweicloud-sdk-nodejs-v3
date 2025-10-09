import { AccessKeyStatus } from './AccessKeyStatus';


export class AccessKeyMetadata {
    private 'user_id'?: string;
    private 'access_key_id'?: string;
    private 'created_at'?: Date;
    public status?: AccessKeyStatus;
    public constructor(userId?: string, accessKeyId?: string, createdAt?: Date, status?: AccessKeyStatus) { 
        this['user_id'] = userId;
        this['access_key_id'] = accessKeyId;
        this['created_at'] = createdAt;
        this['status'] = status;
    }
    public withUserId(userId: string): AccessKeyMetadata {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withAccessKeyId(accessKeyId: string): AccessKeyMetadata {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withCreatedAt(createdAt: Date): AccessKeyMetadata {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withStatus(status: AccessKeyStatus): AccessKeyMetadata {
        this['status'] = status;
        return this;
    }
}