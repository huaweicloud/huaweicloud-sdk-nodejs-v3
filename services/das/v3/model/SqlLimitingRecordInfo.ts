

export class SqlLimitingRecordInfo {
    private 'item_id'?: string;
    public type?: string;
    private 'key_str'?: string;
    private 'max_connection'?: string;
    private 'max_waiting'?: string;
    private 'cur_connection'?: number;
    private 'cur_reject'?: number;
    private 'total_reject'?: number;
    private 'create_at'?: string;
    private 'query_id'?: string;
    public constructor() { 
    }
    public withItemId(itemId: string): SqlLimitingRecordInfo {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
    public withType(type: string): SqlLimitingRecordInfo {
        this['type'] = type;
        return this;
    }
    public withKeyStr(keyStr: string): SqlLimitingRecordInfo {
        this['key_str'] = keyStr;
        return this;
    }
    public set keyStr(keyStr: string  | undefined) {
        this['key_str'] = keyStr;
    }
    public get keyStr(): string | undefined {
        return this['key_str'];
    }
    public withMaxConnection(maxConnection: string): SqlLimitingRecordInfo {
        this['max_connection'] = maxConnection;
        return this;
    }
    public set maxConnection(maxConnection: string  | undefined) {
        this['max_connection'] = maxConnection;
    }
    public get maxConnection(): string | undefined {
        return this['max_connection'];
    }
    public withMaxWaiting(maxWaiting: string): SqlLimitingRecordInfo {
        this['max_waiting'] = maxWaiting;
        return this;
    }
    public set maxWaiting(maxWaiting: string  | undefined) {
        this['max_waiting'] = maxWaiting;
    }
    public get maxWaiting(): string | undefined {
        return this['max_waiting'];
    }
    public withCurConnection(curConnection: number): SqlLimitingRecordInfo {
        this['cur_connection'] = curConnection;
        return this;
    }
    public set curConnection(curConnection: number  | undefined) {
        this['cur_connection'] = curConnection;
    }
    public get curConnection(): number | undefined {
        return this['cur_connection'];
    }
    public withCurReject(curReject: number): SqlLimitingRecordInfo {
        this['cur_reject'] = curReject;
        return this;
    }
    public set curReject(curReject: number  | undefined) {
        this['cur_reject'] = curReject;
    }
    public get curReject(): number | undefined {
        return this['cur_reject'];
    }
    public withTotalReject(totalReject: number): SqlLimitingRecordInfo {
        this['total_reject'] = totalReject;
        return this;
    }
    public set totalReject(totalReject: number  | undefined) {
        this['total_reject'] = totalReject;
    }
    public get totalReject(): number | undefined {
        return this['total_reject'];
    }
    public withCreateAt(createAt: string): SqlLimitingRecordInfo {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withQueryId(queryId: string): SqlLimitingRecordInfo {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
}