

export class ListKillProcessHistoryRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'page_num'?: number;
    private 'page_size'?: number;
    public constructor(instanceId?: string, startTime?: number, endTime?: number, pageNum?: number, pageSize?: number) { 
        this['instance_id'] = instanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['page_num'] = pageNum;
        this['page_size'] = pageSize;
    }
    public withInstanceId(instanceId: string): ListKillProcessHistoryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListKillProcessHistoryRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartTime(startTime: number): ListKillProcessHistoryRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListKillProcessHistoryRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPageNum(pageNum: number): ListKillProcessHistoryRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListKillProcessHistoryRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}