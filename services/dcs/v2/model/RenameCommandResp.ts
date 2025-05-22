

export class RenameCommandResp {
    public command?: string;
    public flushall?: string;
    public flushdb?: string;
    public hgetall?: string;
    public keys?: string;
    public hscan?: string;
    public scan?: string;
    public sscan?: string;
    public zscan?: string;
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
    public withHscan(hscan: string): RenameCommandResp {
        this['hscan'] = hscan;
        return this;
    }
    public withScan(scan: string): RenameCommandResp {
        this['scan'] = scan;
        return this;
    }
    public withSscan(sscan: string): RenameCommandResp {
        this['sscan'] = sscan;
        return this;
    }
    public withZscan(zscan: string): RenameCommandResp {
        this['zscan'] = zscan;
        return this;
    }
}