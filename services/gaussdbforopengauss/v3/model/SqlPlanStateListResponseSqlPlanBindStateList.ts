

export class SqlPlanStateListResponseSqlPlanBindStateList {
    public outline?: string;
    public cost?: string;
    public status?: string;
    private 'sql_hash'?: string;
    private 'plan_id'?: string;
    public constructor() { 
    }
    public withOutline(outline: string): SqlPlanStateListResponseSqlPlanBindStateList {
        this['outline'] = outline;
        return this;
    }
    public withCost(cost: string): SqlPlanStateListResponseSqlPlanBindStateList {
        this['cost'] = cost;
        return this;
    }
    public withStatus(status: string): SqlPlanStateListResponseSqlPlanBindStateList {
        this['status'] = status;
        return this;
    }
    public withSqlHash(sqlHash: string): SqlPlanStateListResponseSqlPlanBindStateList {
        this['sql_hash'] = sqlHash;
        return this;
    }
    public set sqlHash(sqlHash: string  | undefined) {
        this['sql_hash'] = sqlHash;
    }
    public get sqlHash(): string | undefined {
        return this['sql_hash'];
    }
    public withPlanId(planId: string): SqlPlanStateListResponseSqlPlanBindStateList {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
}