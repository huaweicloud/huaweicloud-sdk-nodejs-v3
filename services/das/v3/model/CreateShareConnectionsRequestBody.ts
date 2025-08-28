import { ShareConnUserInfo } from './ShareConnUserInfo';


export class CreateShareConnectionsRequestBody {
    private 'shared_conn_id'?: string;
    private 'expired_time'?: string;
    public users?: Array<ShareConnUserInfo>;
    public constructor(sharedConnId?: string, users?: Array<ShareConnUserInfo>) { 
        this['shared_conn_id'] = sharedConnId;
        this['users'] = users;
    }
    public withSharedConnId(sharedConnId: string): CreateShareConnectionsRequestBody {
        this['shared_conn_id'] = sharedConnId;
        return this;
    }
    public set sharedConnId(sharedConnId: string  | undefined) {
        this['shared_conn_id'] = sharedConnId;
    }
    public get sharedConnId(): string | undefined {
        return this['shared_conn_id'];
    }
    public withExpiredTime(expiredTime: string): CreateShareConnectionsRequestBody {
        this['expired_time'] = expiredTime;
        return this;
    }
    public set expiredTime(expiredTime: string  | undefined) {
        this['expired_time'] = expiredTime;
    }
    public get expiredTime(): string | undefined {
        return this['expired_time'];
    }
    public withUsers(users: Array<ShareConnUserInfo>): CreateShareConnectionsRequestBody {
        this['users'] = users;
        return this;
    }
}