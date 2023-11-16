

export class ShowFlowGraphRequest {
    private 'build_flow_record_id'?: string;
    public constructor(buildFlowRecordId?: string) { 
        this['build_flow_record_id'] = buildFlowRecordId;
    }
    public withBuildFlowRecordId(buildFlowRecordId: string): ShowFlowGraphRequest {
        this['build_flow_record_id'] = buildFlowRecordId;
        return this;
    }
    public set buildFlowRecordId(buildFlowRecordId: string  | undefined) {
        this['build_flow_record_id'] = buildFlowRecordId;
    }
    public get buildFlowRecordId(): string | undefined {
        return this['build_flow_record_id'];
    }
}