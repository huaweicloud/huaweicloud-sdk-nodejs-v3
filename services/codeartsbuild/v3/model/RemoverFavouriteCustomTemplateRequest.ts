

export class RemoverFavouriteCustomTemplateRequest {
    public uuid?: string;
    public constructor(uuid?: string) { 
        this['uuid'] = uuid;
    }
    public withUuid(uuid: string): RemoverFavouriteCustomTemplateRequest {
        this['uuid'] = uuid;
        return this;
    }
}