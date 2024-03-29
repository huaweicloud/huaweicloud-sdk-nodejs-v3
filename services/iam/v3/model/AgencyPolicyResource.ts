

export class AgencyPolicyResource {
    public uri?: Array<string>;
    public constructor(uri?: Array<string>) { 
        this['uri'] = uri;
    }
    public withUri(uri: Array<string>): AgencyPolicyResource {
        this['uri'] = uri;
        return this;
    }
}