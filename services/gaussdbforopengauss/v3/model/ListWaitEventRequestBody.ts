import { WaitEventQueryInfo } from './WaitEventQueryInfo';


export class ListWaitEventRequestBody {
    private 'node_id'?: string;
    public system?: boolean;
    public limit?: number;
    public offset?: number;
    private 'order_fields'?: Array<Array<string>>;
    private 'wait_event_query_info'?: WaitEventQueryInfo;
    public constructor() { 
    }
    public withNodeId(nodeId: string): ListWaitEventRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSystem(system: boolean): ListWaitEventRequestBody {
        this['system'] = system;
        return this;
    }
    public withLimit(limit: number): ListWaitEventRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWaitEventRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withOrderFields(orderFields: Array<Array<string>>): ListWaitEventRequestBody {
        this['order_fields'] = orderFields;
        return this;
    }
    public set orderFields(orderFields: Array<Array<string>>  | undefined) {
        this['order_fields'] = orderFields;
    }
    public get orderFields(): Array<Array<string>> | undefined {
        return this['order_fields'];
    }
    public withWaitEventQueryInfo(waitEventQueryInfo: WaitEventQueryInfo): ListWaitEventRequestBody {
        this['wait_event_query_info'] = waitEventQueryInfo;
        return this;
    }
    public set waitEventQueryInfo(waitEventQueryInfo: WaitEventQueryInfo  | undefined) {
        this['wait_event_query_info'] = waitEventQueryInfo;
    }
    public get waitEventQueryInfo(): WaitEventQueryInfo | undefined {
        return this['wait_event_query_info'];
    }
}