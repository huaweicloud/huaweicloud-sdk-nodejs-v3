import { TopologyNodeInfo } from './TopologyNodeInfo';


export class WorkflowInstanceTopology {
    private 'audit_logs'?: Array<TopologyNodeInfo>;
    public constructor() { 
    }
    public withAuditLogs(auditLogs: Array<TopologyNodeInfo>): WorkflowInstanceTopology {
        this['audit_logs'] = auditLogs;
        return this;
    }
    public set auditLogs(auditLogs: Array<TopologyNodeInfo>  | undefined) {
        this['audit_logs'] = auditLogs;
    }
    public get auditLogs(): Array<TopologyNodeInfo> | undefined {
        return this['audit_logs'];
    }
}