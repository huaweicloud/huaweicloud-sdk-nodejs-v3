

export class RenameCommandResp {
    public command?: string;
    public flushall?: string;
    public flushdb?: string;
    public hgetall?: string;
    public keys?: string;
    public constructor() { 
    }
    public withCommand(command: string): RenameCommandResp {
        this['command'] = command;
        return this;
    }
    public withFlushall(flushall: string): RenameCommandResp {
        this['flushall'] = flushall;
        return this;
    }
    public withFlushdb(flushdb: string): RenameCommandResp {
        this['flushdb'] = flushdb;
        return this;
    }
    public withHgetall(hgetall: string): RenameCommandResp {
        this['hgetall'] = hgetall;
        return this;
    }
    public withKeys(keys: string): RenameCommandResp {
        this['keys'] = keys;
        return this;
    }
}