

export class AddFavouriteOfficialTemplateRequest {
    public uuid?: string;
    public constructor(uuid?: string) { 
        this['uuid'] = uuid;
    }
    public withUuid(uuid: string): AddFavouriteOfficialTemplateRequest {
        this['uuid'] = uuid;
        return this;
    }
}