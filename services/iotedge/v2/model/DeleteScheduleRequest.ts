

export class DeleteScheduleRequest {
    private 'edge_node_id'?: string;
    private 'schedule_id'?: string;
    public constructor(edgeNodeId?: string, scheduleId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['schedule_id'] = scheduleId;
    }
    public withEdgeNodeId(edgeNodeId: string): DeleteScheduleRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withScheduleId(scheduleId: string): DeleteScheduleRequest {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
}