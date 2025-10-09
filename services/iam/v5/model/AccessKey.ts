import { AccessKeyStatus } from './AccessKeyStatus';


export class AccessKey {
    private 'user_id'?: string;
    private 'access_key_id'?: string;
    private 'created_at'?: Date;
    private 'secret_access_key'?: string;
    public status?: AccessKeyStatus;
    public constructor(userId?: string, accessKeyId?: string, createdAt?: Date, secretAccessKey?: string, status?: AccessKeyStatus) { 
        this['user_id'] = userId;
        this['access_key_id'] = accessKeyId;
        this['created_at'] = createdAt;
        this['secret_access_key'] = secretAccessKey;
        this['status'] = status;
    }
    public withUserId(userId: string): AccessKey {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withAccessKeyId(accessKeyId: string): AccessKey {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withCreatedAt(createdAt: Date): AccessKey {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withSecretAccessKey(secretAccessKey: string): AccessKey {
        this['secret_access_key'] = secretAccessKey;
        return this;
    }
    public set secretAccessKey(secretAccessKey: string  | undefined) {
        this['secret_access_key'] = secretAccessKey;
    }
    public get secretAccessKey(): string | undefined {
        return this['secret_access_key'];
    }
    public withStatus(status: AccessKeyStatus): AccessKey {
        this['status'] = status;
        return this;
    }
}