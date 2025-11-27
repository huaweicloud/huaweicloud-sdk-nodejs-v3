import { StatusEvent } from './StatusEvent';
import { StatusViolation } from './StatusViolation';


export class UCSStatusViolation {
    public clusterID?: string;
    public auditTimestamp?: string;
    public clusterViolations?: Array<StatusViolation>;
    public clusterEvents?: Array<StatusEvent>;
    public warnEvents?: Array<StatusEvent>;
    public constructor() { 
    }
    public withClusterID(clusterID: string): UCSStatusViolation {
        this['clusterID'] = clusterID;
        return this;
    }
    public withAuditTimestamp(auditTimestamp: string): UCSStatusViolation {
        this['auditTimestamp'] = auditTimestamp;
        return this;
    }
    public withClusterViolations(clusterViolations: Array<StatusViolation>): UCSStatusViolation {
        this['clusterViolations'] = clusterViolations;
        return this;
    }
    public withClusterEvents(clusterEvents: Array<StatusEvent>): UCSStatusViolation {
        this['clusterEvents'] = clusterEvents;
        return this;
    }
    public withWarnEvents(warnEvents: Array<StatusEvent>): UCSStatusViolation {
        this['warnEvents'] = warnEvents;
        return this;
    }
}