

export class DeleteTemplateRequest {
    public uuid?: string;
    public constructor(uuid?: string) { 
        this['uuid'] = uuid;
    }
    public withUuid(uuid: string): DeleteTemplateRequest {
        this['uuid'] = uuid;
        return this;
    }
}