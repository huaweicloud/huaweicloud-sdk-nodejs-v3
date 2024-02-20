

export class ListClientsRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public offset?: number;
    public limit?: number;
    public addr?: string;
    public sort?: string;
    public order?: ListClientsRequestOrderEnum | string;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withInstanceId(instanceId: string): ListClientsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListClientsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withOffset(offset: number): ListClientsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListClientsRequest {
        this['limit'] = limit;
        return this;
    }
    public withAddr(addr: string): ListClientsRequest {
        this['addr'] = addr;
        return this;
    }
    public withSort(sort: string): ListClientsRequest {
        this['sort'] = sort;
        return this;
    }
    public withOrder(order: ListClientsRequestOrderEnum | string): ListClientsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListClientsRequestOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
