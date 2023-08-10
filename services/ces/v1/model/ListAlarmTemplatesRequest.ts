

export class ListAlarmTemplatesRequest {
    public alarmTemplateId?: string;
    public namespace?: string;
    public dname?: string;
    public start?: string;
    public limit?: string;
    public constructor() { 
    }
    public withAlarmTemplateId(alarmTemplateId: string): ListAlarmTemplatesRequest {
        this['alarmTemplateId'] = alarmTemplateId;
        return this;
    }
    public withNamespace(namespace: string): ListAlarmTemplatesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withDname(dname: string): ListAlarmTemplatesRequest {
        this['dname'] = dname;
        return this;
    }
    public withStart(start: string): ListAlarmTemplatesRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: string): ListAlarmTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}