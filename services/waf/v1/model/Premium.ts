

export class Premium {
    public purchased?: boolean;
    public total?: number;
    public elb?: number;
    public dedicated?: number;
    public constructor() { 
    }
    public withPurchased(purchased: boolean): Premium {
        this['purchased'] = purchased;
        return this;
    }
    public withTotal(total: number): Premium {
        this['total'] = total;
        return this;
    }
    public withElb(elb: number): Premium {
        this['elb'] = elb;
        return this;
    }
    public withDedicated(dedicated: number): Premium {
        this['dedicated'] = dedicated;
        return this;
    }
}