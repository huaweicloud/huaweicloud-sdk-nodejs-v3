

export class ShowTemplateRequest {
    public uuid?: string;
    public constructor(uuid?: string) { 
        this['uuid'] = uuid;
    }
    public withUuid(uuid: string): ShowTemplateRequest {
        this['uuid'] = uuid;
        return this;
    }
}