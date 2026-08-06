import { ConnectionIdsItem } from './ConnectionIdsItem';


export class BatchDeleteConnectionNewRequestBody {
    private 'delete_all'?: boolean;
    private 'connection_ids'?: Array<ConnectionIdsItem>;
    public constructor() { 
    }
    public withDeleteAll(deleteAll: boolean): BatchDeleteConnectionNewRequestBody {
        this['delete_all'] = deleteAll;
        return this;
    }
    public set deleteAll(deleteAll: boolean  | undefined) {
        this['delete_all'] = deleteAll;
    }
    public get deleteAll(): boolean | undefined {
        return this['delete_all'];
    }
    public withConnectionIds(connectionIds: Array<ConnectionIdsItem>): BatchDeleteConnectionNewRequestBody {
        this['connection_ids'] = connectionIds;
        return this;
    }
    public set connectionIds(connectionIds: Array<ConnectionIdsItem>  | undefined) {
        this['connection_ids'] = connectionIds;
    }
    public get connectionIds(): Array<ConnectionIdsItem> | undefined {
        return this['connection_ids'];
    }
}