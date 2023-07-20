

export class PreoccupyIp {
    public total?: number;
    public constructor(total?: number) { 
        this['total'] = total;
    }
    public withTotal(total: number): PreoccupyIp {
        this['total'] = total;
        return this;
    }
}