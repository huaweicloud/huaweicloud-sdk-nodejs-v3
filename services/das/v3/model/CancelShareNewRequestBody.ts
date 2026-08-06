import { CancelShareNewRequestBodyUsers } from './CancelShareNewRequestBodyUsers';


export class CancelShareNewRequestBody {
    private 'shared_conn_id'?: string;
    public users?: Array<CancelShareNewRequestBodyUsers>;
    public constructor() { 
    }
    public withSharedConnId(sharedConnId: string): CancelShareNewRequestBody {
        this['shared_conn_id'] = sharedConnId;
        return this;
    }
    public set sharedConnId(sharedConnId: string  | undefined) {
        this['shared_conn_id'] = sharedConnId;
    }
    public get sharedConnId(): string | undefined {
        return this['shared_conn_id'];
    }
    public withUsers(users: Array<CancelShareNewRequestBodyUsers>): CancelShareNewRequestBody {
        this['users'] = users;
        return this;
    }
}