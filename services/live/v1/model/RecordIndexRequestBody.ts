

export class RecordIndexRequestBody {
    private 'publish_domain': string | undefined;
    public app: string;
    public stream: string;
    private 'start_time': Date | undefined;
    private 'end_time': Date | undefined;
    private 'object'?: string | undefined;
    public constructor(publishDomain?: any, app?: any, stream?: any, startTime?: any, endTime?: any) { 
        this['publish_domain'] = publishDomain;
        this['app'] = app;
        this['stream'] = stream;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withPublishDomain(publishDomain: string): RecordIndexRequestBody {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): RecordIndexRequestBody {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): RecordIndexRequestBody {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: Date): RecordIndexRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): RecordIndexRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withModelObject(modelObject: string): RecordIndexRequestBody {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject() {
        return this['object'];
    }
}