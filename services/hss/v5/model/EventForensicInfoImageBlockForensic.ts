

export class EventForensicInfoImageBlockForensic {
    public type?: string;
    public msg?: string;
    public path?: string;
    public image?: string;
    public version?: boolean;
    public result?: string;
    public time?: string;
    public constructor() { 
    }
    public withType(type: string): EventForensicInfoImageBlockForensic {
        this['type'] = type;
        return this;
    }
    public withMsg(msg: string): EventForensicInfoImageBlockForensic {
        this['msg'] = msg;
        return this;
    }
    public withPath(path: string): EventForensicInfoImageBlockForensic {
        this['path'] = path;
        return this;
    }
    public withImage(image: string): EventForensicInfoImageBlockForensic {
        this['image'] = image;
        return this;
    }
    public withVersion(version: boolean): EventForensicInfoImageBlockForensic {
        this['version'] = version;
        return this;
    }
    public withResult(result: string): EventForensicInfoImageBlockForensic {
        this['result'] = result;
        return this;
    }
    public withTime(time: string): EventForensicInfoImageBlockForensic {
        this['time'] = time;
        return this;
    }
}