

export class EventDump {
    public source?: string;
    public state?: string;
    public description?: string;
    public id?: string;
    public filename?: string;
    public obsname?: string;
    public tenantid?: string;
    public start?: number;
    public end?: number;
    public total?: number;
    public url?: string;
    public urltimestamp?: number;
    public timestamp?: number;
    public constructor() { 
    }
    public withSource(source: string): EventDump {
        this['source'] = source;
        return this;
    }
    public withState(state: string): EventDump {
        this['state'] = state;
        return this;
    }
    public withDescription(description: string): EventDump {
        this['description'] = description;
        return this;
    }
    public withId(id: string): EventDump {
        this['id'] = id;
        return this;
    }
    public withFilename(filename: string): EventDump {
        this['filename'] = filename;
        return this;
    }
    public withObsname(obsname: string): EventDump {
        this['obsname'] = obsname;
        return this;
    }
    public withTenantid(tenantid: string): EventDump {
        this['tenantid'] = tenantid;
        return this;
    }
    public withStart(start: number): EventDump {
        this['start'] = start;
        return this;
    }
    public withEnd(end: number): EventDump {
        this['end'] = end;
        return this;
    }
    public withTotal(total: number): EventDump {
        this['total'] = total;
        return this;
    }
    public withUrl(url: string): EventDump {
        this['url'] = url;
        return this;
    }
    public withUrltimestamp(urltimestamp: number): EventDump {
        this['urltimestamp'] = urltimestamp;
        return this;
    }
    public withTimestamp(timestamp: number): EventDump {
        this['timestamp'] = timestamp;
        return this;
    }
}