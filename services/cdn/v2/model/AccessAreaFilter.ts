

export class AccessAreaFilter {
    public type?: string;
    private 'content_type'?: string;
    private 'content_value'?: string;
    public area?: string;
    private 'exception_ip'?: string;
    public constructor(type?: string, contentType?: string, area?: string) { 
        this['type'] = type;
        this['content_type'] = contentType;
        this['area'] = area;
    }
    public withType(type: string): AccessAreaFilter {
        this['type'] = type;
        return this;
    }
    public withContentType(contentType: string): AccessAreaFilter {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content_type'];
    }
    public withContentValue(contentValue: string): AccessAreaFilter {
        this['content_value'] = contentValue;
        return this;
    }
    public set contentValue(contentValue: string  | undefined) {
        this['content_value'] = contentValue;
    }
    public get contentValue(): string | undefined {
        return this['content_value'];
    }
    public withArea(area: string): AccessAreaFilter {
        this['area'] = area;
        return this;
    }
    public withExceptionIp(exceptionIp: string): AccessAreaFilter {
        this['exception_ip'] = exceptionIp;
        return this;
    }
    public set exceptionIp(exceptionIp: string  | undefined) {
        this['exception_ip'] = exceptionIp;
    }
    public get exceptionIp(): string | undefined {
        return this['exception_ip'];
    }
}