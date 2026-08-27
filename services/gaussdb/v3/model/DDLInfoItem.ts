

export class DDLInfoItem {
    public table?: string;
    public constructor(table?: string) { 
        this['table'] = table;
    }
    public withTable(table: string): DDLInfoItem {
        this['table'] = table;
        return this;
    }
}