

export class SlowLogStatistics {
    public count?: string;
    public time?: string;
    public lockTime?: string;
    public rowsSent?: number;
    public rowsExamined?: number;
    public database?: string;
    public users?: string;
    public querySample?: string;
    public type?: string;
    public clientIP?: string;
    public constructor(count?: string, time?: string, lockTime?: string, rowsSent?: number, rowsExamined?: number, database?: string, users?: string, querySample?: string, type?: string, clientIP?: string) { 
        this['count'] = count;
        this['time'] = time;
        this['lockTime'] = lockTime;
        this['rowsSent'] = rowsSent;
        this['rowsExamined'] = rowsExamined;
        this['database'] = database;
        this['users'] = users;
        this['querySample'] = querySample;
        this['type'] = type;
        this['clientIP'] = clientIP;
    }
    public withCount(count: string): SlowLogStatistics {
        this['count'] = count;
        return this;
    }
    public withTime(time: string): SlowLogStatistics {
        this['time'] = time;
        return this;
    }
    public withLockTime(lockTime: string): SlowLogStatistics {
        this['lockTime'] = lockTime;
        return this;
    }
    public withRowsSent(rowsSent: number): SlowLogStatistics {
        this['rowsSent'] = rowsSent;
        return this;
    }
    public withRowsExamined(rowsExamined: number): SlowLogStatistics {
        this['rowsExamined'] = rowsExamined;
        return this;
    }
    public withDatabase(database: string): SlowLogStatistics {
        this['database'] = database;
        return this;
    }
    public withUsers(users: string): SlowLogStatistics {
        this['users'] = users;
        return this;
    }
    public withQuerySample(querySample: string): SlowLogStatistics {
        this['querySample'] = querySample;
        return this;
    }
    public withType(type: string): SlowLogStatistics {
        this['type'] = type;
        return this;
    }
    public withClientIP(clientIP: string): SlowLogStatistics {
        this['clientIP'] = clientIP;
        return this;
    }
}