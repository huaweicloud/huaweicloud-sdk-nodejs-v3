

export class DeleteTemplatesRequest {
    public uuid?: string;
    public constructor(uuid?: string) { 
        this['uuid'] = uuid;
    }
    public withUuid(uuid: string): DeleteTemplatesRequest {
        this['uuid'] = uuid;
        return this;
    }
}