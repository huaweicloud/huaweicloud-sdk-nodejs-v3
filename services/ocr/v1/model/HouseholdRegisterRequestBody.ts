

export class HouseholdRegisterRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): HouseholdRegisterRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): HouseholdRegisterRequestBody {
        this['url'] = url;
        return this;
    }
}