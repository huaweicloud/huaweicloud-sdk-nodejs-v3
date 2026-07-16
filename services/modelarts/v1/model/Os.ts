

export class Os {
    public name?: string;
    public imageId?: string;
    public imageType?: string;
    public autoMatch?: string;
    public constructor() { 
    }
    public withName(name: string): Os {
        this['name'] = name;
        return this;
    }
    public withImageId(imageId: string): Os {
        this['imageId'] = imageId;
        return this;
    }
    public withImageType(imageType: string): Os {
        this['imageType'] = imageType;
        return this;
    }
    public withAutoMatch(autoMatch: string): Os {
        this['autoMatch'] = autoMatch;
        return this;
    }
}