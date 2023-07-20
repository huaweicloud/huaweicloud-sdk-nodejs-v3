

export class ListAuditlogsResult {
    private 'node_id'?: string;
    public id?: string;
    public name?: string;
    public size?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(nodeId?: string, id?: string, name?: string, size?: number, startTime?: string, endTime?: string) { 
        this['node_id'] = nodeId;
        this['id'] = id;
        this['name'] = name;
        this['size'] = size;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withNodeId(nodeId: string): ListAuditlogsResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withId(id: string): ListAuditlogsResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAuditlogsResult {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): ListAuditlogsResult {
        this['size'] = size;
        return this;
    }
    public withStartTime(startTime: string): ListAuditlogsResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAuditlogsResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}