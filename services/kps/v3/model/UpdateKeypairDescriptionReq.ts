

export class UpdateKeypairDescriptionReq {
    public description?: string;
    public constructor(description?: string) { 
        this['description'] = description;
    }
    public withDescription(description: string): UpdateKeypairDescriptionReq {
        this['description'] = description;
        return this;
    }
}