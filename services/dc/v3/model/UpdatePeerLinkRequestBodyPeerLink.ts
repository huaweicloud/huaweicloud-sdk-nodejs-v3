

export class UpdatePeerLinkRequestBodyPeerLink {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdatePeerLinkRequestBodyPeerLink {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdatePeerLinkRequestBodyPeerLink {
        this['description'] = description;
        return this;
    }
}