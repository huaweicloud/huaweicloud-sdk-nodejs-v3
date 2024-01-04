

export class HttpDetectRequestBodyExtension {
    public header?: { [key: string]: string; };
    public constructor() { 
    }
    public withHeader(header: { [key: string]: string; }): HttpDetectRequestBodyExtension {
        this['header'] = header;
        return this;
    }
}