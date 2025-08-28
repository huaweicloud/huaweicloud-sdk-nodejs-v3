

export class SlowLogList {
    public users?: string;
    public database?: string;
    public querySample?: string;
    public logTime?: string;
    public time?: string;
    public shards?: string;
    public rowsExamined?: string;
    public host?: string;
    public constructor() { 
    }
    public withUsers(users: string): SlowLogList {
        this['users'] = users;
        return this;
    }
    public withDatabase(database: string): SlowLogList {
        this['database'] = database;
        return this;
    }
    public withQuerySample(querySample: string): SlowLogList {
        this['querySample'] = querySample;
        return this;
    }
    public withLogTime(logTime: string): SlowLogList {
        this['logTime'] = logTime;
        return this;
    }
    public withTime(time: string): SlowLogList {
        this['time'] = time;
        return this;
    }
    public withShards(shards: string): SlowLogList {
        this['shards'] = shards;
        return this;
    }
    public withRowsExamined(rowsExamined: string): SlowLogList {
        this['rowsExamined'] = rowsExamined;
        return this;
    }
    public withHost(host: string): SlowLogList {
        this['host'] = host;
        return this;
    }
}