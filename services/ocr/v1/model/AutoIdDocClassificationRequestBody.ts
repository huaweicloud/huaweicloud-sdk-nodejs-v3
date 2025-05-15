

export class AutoIdDocClassificationRequestBody {
    public data?: string;
    public url?: string;
    public alarm?: boolean;
    public constructor() { 
    }
    public withData(data: string): AutoIdDocClassificationRequestBody {
        this['data'] = data;
        return this;
    }
    public withUrl(url: string): AutoIdDocClassificationRequestBody {
        this['url'] = url;
        return this;
    }
    public withAlarm(alarm: boolean): AutoIdDocClassificationRequestBody {
        this['alarm'] = alarm;
        return this;
    }
}