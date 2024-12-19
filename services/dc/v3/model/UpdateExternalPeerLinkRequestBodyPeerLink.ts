

export class UpdateExternalPeerLinkRequestBodyPeerLink {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateExternalPeerLinkRequestBodyPeerLink {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateExternalPeerLinkRequestBodyPeerLink {
        this['description'] = description;
        return this;
    }
}