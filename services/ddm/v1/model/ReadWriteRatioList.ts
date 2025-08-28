

export class ReadWriteRatioList {
    public schema?: string;
    public table?: string;
    public readCount?: string;
    public writeCount?: string;
    public relationTables?: string;
    public lastUpdated?: string;
    public constructor() { 
    }
    public withSchema(schema: string): ReadWriteRatioList {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): ReadWriteRatioList {
        this['table'] = table;
        return this;
    }
    public withReadCount(readCount: string): ReadWriteRatioList {
        this['readCount'] = readCount;
        return this;
    }
    public withWriteCount(writeCount: string): ReadWriteRatioList {
        this['writeCount'] = writeCount;
        return this;
    }
    public withRelationTables(relationTables: string): ReadWriteRatioList {
        this['relationTables'] = relationTables;
        return this;
    }
    public withLastUpdated(lastUpdated: string): ReadWriteRatioList {
        this['lastUpdated'] = lastUpdated;
        return this;
    }
}