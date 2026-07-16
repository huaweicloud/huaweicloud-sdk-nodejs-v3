

export class EventModel {
    public apiVersion?: string;
    public kind?: string;
    public type?: string;
    public firstTimestamp?: string;
    public lastTimestamp?: string;
    public count?: number;
    public reason?: string;
    public message?: string;
    public constructor(apiVersion?: string, kind?: string, type?: string) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['type'] = type;
    }
    public withApiVersion(apiVersion: string): EventModel {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): EventModel {
        this['kind'] = kind;
        return this;
    }
    public withType(type: string): EventModel {
        this['type'] = type;
        return this;
    }
    public withFirstTimestamp(firstTimestamp: string): EventModel {
        this['firstTimestamp'] = firstTimestamp;
        return this;
    }
    public withLastTimestamp(lastTimestamp: string): EventModel {
        this['lastTimestamp'] = lastTimestamp;
        return this;
    }
    public withCount(count: number): EventModel {
        this['count'] = count;
        return this;
    }
    public withReason(reason: string): EventModel {
        this['reason'] = reason;
        return this;
    }
    public withMessage(message: string): EventModel {
        this['message'] = message;
        return this;
    }
}