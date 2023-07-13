

export class UpdateKeypairDescriptionReq {
    public description: string;
    public constructor(description?: any) { 
        this['description'] = description;
    }
    public withDescription(description: string): UpdateKeypairDescriptionReq {
        this['description'] = description;
        return this;
    }
}