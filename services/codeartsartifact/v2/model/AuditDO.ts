

export class AuditDO {
    public id?: string;
    public module?: string;
    public operation?: string;
    public time?: string;
    public info?: string;
    public data?: string;
    public reason?: string;
    public userAgent?: string;
    public operator?: string;
    public operatorNickName?: string;
    public operatorTenantName?: string;
    public ipSource?: string;
    public constructor() { 
    }
    public withId(id: string): AuditDO {
        this['id'] = id;
        return this;
    }
    public withModule(module: string): AuditDO {
        this['module'] = module;
        return this;
    }
    public withOperation(operation: string): AuditDO {
        this['operation'] = operation;
        return this;
    }
    public withTime(time: string): AuditDO {
        this['time'] = time;
        return this;
    }
    public withInfo(info: string): AuditDO {
        this['info'] = info;
        return this;
    }
    public withData(data: string): AuditDO {
        this['data'] = data;
        return this;
    }
    public withReason(reason: string): AuditDO {
        this['reason'] = reason;
        return this;
    }
    public withUserAgent(userAgent: string): AuditDO {
        this['userAgent'] = userAgent;
        return this;
    }
    public withOperator(operator: string): AuditDO {
        this['operator'] = operator;
        return this;
    }
    public withOperatorNickName(operatorNickName: string): AuditDO {
        this['operatorNickName'] = operatorNickName;
        return this;
    }
    public withOperatorTenantName(operatorTenantName: string): AuditDO {
        this['operatorTenantName'] = operatorTenantName;
        return this;
    }
    public withIpSource(ipSource: string): AuditDO {
        this['ipSource'] = ipSource;
        return this;
    }
}