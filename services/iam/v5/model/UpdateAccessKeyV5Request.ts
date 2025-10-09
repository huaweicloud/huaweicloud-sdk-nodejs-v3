import { UpdateAccessKeyReqBody } from './UpdateAccessKeyReqBody';


export class UpdateAccessKeyV5Request {
    private 'user_id'?: string;
    private 'access_key_id'?: string;
    public body?: UpdateAccessKeyReqBody;
    public constructor(userId?: string, accessKeyId?: string) { 
        this['user_id'] = userId;
        this['access_key_id'] = accessKeyId;
    }
    public withUserId(userId: string): UpdateAccessKeyV5Request {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withAccessKeyId(accessKeyId: string): UpdateAccessKeyV5Request {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withBody(body: UpdateAccessKeyReqBody): UpdateAccessKeyV5Request {
        this['body'] = body;
        return this;
    }
}