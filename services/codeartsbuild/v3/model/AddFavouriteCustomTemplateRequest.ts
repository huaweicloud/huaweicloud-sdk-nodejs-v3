

export class AddFavouriteCustomTemplateRequest {
    public uuid?: string;
    public constructor(uuid?: string) { 
        this['uuid'] = uuid;
    }
    public withUuid(uuid: string): AddFavouriteCustomTemplateRequest {
        this['uuid'] = uuid;
        return this;
    }
}