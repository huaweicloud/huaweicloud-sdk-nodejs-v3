

export class CocUpdateChangeRequestBodyTicketInfo {
    public phase?: string;
    private 'work_flow_status'?: string;
    public constructor() { 
    }
    public withPhase(phase: string): CocUpdateChangeRequestBodyTicketInfo {
        this['phase'] = phase;
        return this;
    }
    public withWorkFlowStatus(workFlowStatus: string): CocUpdateChangeRequestBodyTicketInfo {
        this['work_flow_status'] = workFlowStatus;
        return this;
    }
    public set workFlowStatus(workFlowStatus: string  | undefined) {
        this['work_flow_status'] = workFlowStatus;
    }
    public get workFlowStatus(): string | undefined {
        return this['work_flow_status'];
    }
}