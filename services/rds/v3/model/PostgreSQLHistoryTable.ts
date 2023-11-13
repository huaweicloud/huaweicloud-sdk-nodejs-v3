

export class PostgreSQLHistoryTable {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): PostgreSQLHistoryTable {
        this['name'] = name;
        return this;
    }
}