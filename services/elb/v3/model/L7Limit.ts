

export class L7Limit {
    public connection?: number;
    public cps?: number;
    public constructor() { 
    }
    public withConnection(connection: number): L7Limit {
        this['connection'] = connection;
        return this;
    }
    public withCps(cps: number): L7Limit {
        this['cps'] = cps;
        return this;
    }
}