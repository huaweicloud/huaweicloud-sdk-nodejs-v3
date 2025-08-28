import { ShareConnUserInfo } from './ShareConnUserInfo';


export class CancelShareConnectionsRequestBody {
    private 'shared_conn_id'?: string;
    public users?: Array<ShareConnUserInfo>;
    public constructor(sharedConnId?: string, users?: Array<ShareConnUserInfo>) { 
        this['shared_conn_id'] = sharedConnId;
        this['users'] = users;
    }
    public withSharedConnId(sharedConnId: string): CancelShareConnectionsRequestBody {
        this['shared_conn_id'] = sharedConnId;
        return this;
    }
    public set sharedConnId(sharedConnId: string  | undefined) {
        this['shared_conn_id'] = sharedConnId;
    }
    public get sharedConnId(): string | undefined {
        return this['shared_conn_id'];
    }
    public withUsers(users: Array<ShareConnUserInfo>): CancelShareConnectionsRequestBody {
        this['users'] = users;
        return this;
    }
}