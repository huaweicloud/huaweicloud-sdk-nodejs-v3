

export class CloudEvents {
    public id?: string;
    public source?: string;
    public specversion?: string;
    public type?: string;
    public datacontenttype?: string;
    public dataschema?: string;
    public data?: object;
    public time?: string;
    public subject?: string;
    public constructor(id?: string, source?: string, specversion?: string, type?: string) { 
        this['id'] = id;
        this['source'] = source;
        this['specversion'] = specversion;
        this['type'] = type;
    }
    public withId(id: string): CloudEvents {
        this['id'] = id;
        return this;
    }
    public withSource(source: string): CloudEvents {
        this['source'] = source;
        return this;
    }
    public withSpecversion(specversion: string): CloudEvents {
        this['specversion'] = specversion;
        return this;
    }
    public withType(type: string): CloudEvents {
        this['type'] = type;
        return this;
    }
    public withDatacontenttype(datacontenttype: string): CloudEvents {
        this['datacontenttype'] = datacontenttype;
        return this;
    }
    public withDataschema(dataschema: string): CloudEvents {
        this['dataschema'] = dataschema;
        return this;
    }
    public withData(data: object): CloudEvents {
        this['data'] = data;
        return this;
    }
    public withTime(time: string): CloudEvents {
        this['time'] = time;
        return this;
    }
    public withSubject(subject: string): CloudEvents {
        this['subject'] = subject;
        return this;
    }
}