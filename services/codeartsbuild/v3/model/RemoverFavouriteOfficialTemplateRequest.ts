

export class RemoverFavouriteOfficialTemplateRequest {
    public uuid?: string;
    public constructor(uuid?: string) { 
        this['uuid'] = uuid;
    }
    public withUuid(uuid: string): RemoverFavouriteOfficialTemplateRequest {
        this['uuid'] = uuid;
        return this;
    }
}