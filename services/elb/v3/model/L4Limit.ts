

export class L4Limit {
    public connection?: number;
    public cps?: number;
    public constructor() { 
    }
    public withConnection(connection: number): L4Limit {
        this['connection'] = connection;
        return this;
    }
    public withCps(cps: number): L4Limit {
        this['cps'] = cps;
        return this;
    }
}