

export class BatchUpdateResponseResultProject {
    public id?: number;
    public identifier?: string;
    public total?: number;
    public close?: number;
    public role?: number;
    public type?: string;
    public archive?: boolean;
    private 'mem_count'?: number;
    public constructor() { 
    }
    public withId(id: number): BatchUpdateResponseResultProject {
        this['id'] = id;
        return this;
    }
    public withIdentifier(identifier: string): BatchUpdateResponseResultProject {
        this['identifier'] = identifier;
        return this;
    }
    public withTotal(total: number): BatchUpdateResponseResultProject {
        this['total'] = total;
        return this;
    }
    public withClose(close: number): BatchUpdateResponseResultProject {
        this['close'] = close;
        return this;
    }
    public withRole(role: number): BatchUpdateResponseResultProject {
        this['role'] = role;
        return this;
    }
    public withType(type: string): BatchUpdateResponseResultProject {
        this['type'] = type;
        return this;
    }
    public withArchive(archive: boolean): BatchUpdateResponseResultProject {
        this['archive'] = archive;
        return this;
    }
    public withMemCount(memCount: number): BatchUpdateResponseResultProject {
        this['mem_count'] = memCount;
        return this;
    }
    public set memCount(memCount: number  | undefined) {
        this['mem_count'] = memCount;
    }
    public get memCount(): number | undefined {
        return this['mem_count'];
    }
}