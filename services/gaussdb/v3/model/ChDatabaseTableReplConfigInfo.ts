

export class ChDatabaseTableReplConfigInfo {
    private 'repl_type'?: string;
    public tables?: Array<string>;
    public constructor(replType?: string, tables?: Array<string>) { 
        this['repl_type'] = replType;
        this['tables'] = tables;
    }
    public withReplType(replType: string): ChDatabaseTableReplConfigInfo {
        this['repl_type'] = replType;
        return this;
    }
    public set replType(replType: string  | undefined) {
        this['repl_type'] = replType;
    }
    public get replType(): string | undefined {
        return this['repl_type'];
    }
    public withTables(tables: Array<string>): ChDatabaseTableReplConfigInfo {
        this['tables'] = tables;
        return this;
    }
}