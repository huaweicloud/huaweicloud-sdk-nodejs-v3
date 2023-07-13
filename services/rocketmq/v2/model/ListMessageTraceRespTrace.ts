

export class ListMessageTraceRespTrace {
    public success?: boolean;
    private 'trace_type'?: ListMessageTraceRespTraceTraceTypeEnum | undefined;
    public timestamp?: number;
    private 'group_name'?: string | undefined;
    private 'cost_time'?: number | undefined;
    private 'request_id'?: string | undefined;
    private 'consume_status'?: number | undefined;
    public topic?: string;
    private 'msg_id'?: string | undefined;
    private 'offset_msg_id'?: string | undefined;
    public tags?: string;
    public keys?: string;
    private 'store_host'?: string | undefined;
    private 'client_host'?: string | undefined;
    private 'retry_times'?: string | undefined;
    private 'body_length'?: number | undefined;
    private 'msg_type'?: ListMessageTraceRespTraceMsgTypeEnum | undefined;
    private 'transaction_state'?: ListMessageTraceRespTraceTransactionStateEnum | undefined;
    private 'transaction_id'?: string | undefined;
    private 'from_transaction_check'?: boolean | undefined;
    public constructor() { 
    }
    public withSuccess(success: boolean): ListMessageTraceRespTrace {
        this['success'] = success;
        return this;
    }
    public withTraceType(traceType: ListMessageTraceRespTraceTraceTypeEnum): ListMessageTraceRespTrace {
        this['trace_type'] = traceType;
        return this;
    }
    public set traceType(traceType: ListMessageTraceRespTraceTraceTypeEnum | undefined) {
        this['trace_type'] = traceType;
    }
    public get traceType() {
        return this['trace_type'];
    }
    public withTimestamp(timestamp: number): ListMessageTraceRespTrace {
        this['timestamp'] = timestamp;
        return this;
    }
    public withGroupName(groupName: string): ListMessageTraceRespTrace {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withCostTime(costTime: number): ListMessageTraceRespTrace {
        this['cost_time'] = costTime;
        return this;
    }
    public set costTime(costTime: number | undefined) {
        this['cost_time'] = costTime;
    }
    public get costTime() {
        return this['cost_time'];
    }
    public withRequestId(requestId: string): ListMessageTraceRespTrace {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withConsumeStatus(consumeStatus: number): ListMessageTraceRespTrace {
        this['consume_status'] = consumeStatus;
        return this;
    }
    public set consumeStatus(consumeStatus: number | undefined) {
        this['consume_status'] = consumeStatus;
    }
    public get consumeStatus() {
        return this['consume_status'];
    }
    public withTopic(topic: string): ListMessageTraceRespTrace {
        this['topic'] = topic;
        return this;
    }
    public withMsgId(msgId: string): ListMessageTraceRespTrace {
        this['msg_id'] = msgId;
        return this;
    }
    public set msgId(msgId: string | undefined) {
        this['msg_id'] = msgId;
    }
    public get msgId() {
        return this['msg_id'];
    }
    public withOffsetMsgId(offsetMsgId: string): ListMessageTraceRespTrace {
        this['offset_msg_id'] = offsetMsgId;
        return this;
    }
    public set offsetMsgId(offsetMsgId: string | undefined) {
        this['offset_msg_id'] = offsetMsgId;
    }
    public get offsetMsgId() {
        return this['offset_msg_id'];
    }
    public withTags(tags: string): ListMessageTraceRespTrace {
        this['tags'] = tags;
        return this;
    }
    public withKeys(keys: string): ListMessageTraceRespTrace {
        this['keys'] = keys;
        return this;
    }
    public withStoreHost(storeHost: string): ListMessageTraceRespTrace {
        this['store_host'] = storeHost;
        return this;
    }
    public set storeHost(storeHost: string | undefined) {
        this['store_host'] = storeHost;
    }
    public get storeHost() {
        return this['store_host'];
    }
    public withClientHost(clientHost: string): ListMessageTraceRespTrace {
        this['client_host'] = clientHost;
        return this;
    }
    public set clientHost(clientHost: string | undefined) {
        this['client_host'] = clientHost;
    }
    public get clientHost() {
        return this['client_host'];
    }
    public withRetryTimes(retryTimes: string): ListMessageTraceRespTrace {
        this['retry_times'] = retryTimes;
        return this;
    }
    public set retryTimes(retryTimes: string | undefined) {
        this['retry_times'] = retryTimes;
    }
    public get retryTimes() {
        return this['retry_times'];
    }
    public withBodyLength(bodyLength: number): ListMessageTraceRespTrace {
        this['body_length'] = bodyLength;
        return this;
    }
    public set bodyLength(bodyLength: number | undefined) {
        this['body_length'] = bodyLength;
    }
    public get bodyLength() {
        return this['body_length'];
    }
    public withMsgType(msgType: ListMessageTraceRespTraceMsgTypeEnum): ListMessageTraceRespTrace {
        this['msg_type'] = msgType;
        return this;
    }
    public set msgType(msgType: ListMessageTraceRespTraceMsgTypeEnum | undefined) {
        this['msg_type'] = msgType;
    }
    public get msgType() {
        return this['msg_type'];
    }
    public withTransactionState(transactionState: ListMessageTraceRespTraceTransactionStateEnum): ListMessageTraceRespTrace {
        this['transaction_state'] = transactionState;
        return this;
    }
    public set transactionState(transactionState: ListMessageTraceRespTraceTransactionStateEnum | undefined) {
        this['transaction_state'] = transactionState;
    }
    public get transactionState() {
        return this['transaction_state'];
    }
    public withTransactionId(transactionId: string): ListMessageTraceRespTrace {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId() {
        return this['transaction_id'];
    }
    public withFromTransactionCheck(fromTransactionCheck: boolean): ListMessageTraceRespTrace {
        this['from_transaction_check'] = fromTransactionCheck;
        return this;
    }
    public set fromTransactionCheck(fromTransactionCheck: boolean | undefined) {
        this['from_transaction_check'] = fromTransactionCheck;
    }
    public get fromTransactionCheck() {
        return this['from_transaction_check'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMessageTraceRespTraceTraceTypeEnum {
    PUB = 'Pub',
    SUB = 'Sub',
    ENDTRANSACTION = 'EndTransaction'
}
/**
    * @export
    * @enum {string}
    */
export enum ListMessageTraceRespTraceMsgTypeEnum {
    NORMAL_MSG = 'Normal_Msg',
    TRANS_MSG_HALF = 'Trans_Msg_Half',
    TRANS_MSG_COMMIT = 'Trans_msg_Commit',
    DELAY_MSG = 'Delay_Msg'
}
/**
    * @export
    * @enum {string}
    */
export enum ListMessageTraceRespTraceTransactionStateEnum {
    COMMIT_MESSAGE = 'COMMIT_MESSAGE',
    ROLLBACK_MESSAGE = 'ROLLBACK_MESSAGE',
    UNKNOW = 'UNKNOW'
}
