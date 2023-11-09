import { ActionInfo } from './ActionInfo';
import { AuditLogInfo } from './AuditLogInfo';


export class ActionInstanceInfo {
    public action?: ActionInfo;
    private 'instance_log'?: AuditLogInfo;
    public constructor() { 
    }
    public withAction(action: ActionInfo): ActionInstanceInfo {
        this['action'] = action;
        return this;
    }
    public withInstanceLog(instanceLog: AuditLogInfo): ActionInstanceInfo {
        this['instance_log'] = instanceLog;
        return this;
    }
    public set instanceLog(instanceLog: AuditLogInfo  | undefined) {
        this['instance_log'] = instanceLog;
    }
    public get instanceLog(): AuditLogInfo | undefined {
        return this['instance_log'];
    }
}