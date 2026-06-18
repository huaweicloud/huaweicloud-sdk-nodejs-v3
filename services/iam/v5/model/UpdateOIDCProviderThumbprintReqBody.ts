

export class UpdateOIDCProviderThumbprintReqBody {
    public thumbprints?: Array<string>;
    public constructor(thumbprints?: Array<string>) { 
        this['thumbprints'] = thumbprints;
    }
    public withThumbprints(thumbprints: Array<string>): UpdateOIDCProviderThumbprintReqBody {
        this['thumbprints'] = thumbprints;
        return this;
    }
}