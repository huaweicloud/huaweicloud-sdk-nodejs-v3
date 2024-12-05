import { CreatePeerLinkRequestBodyPeerLinkPeerSite } from './CreatePeerLinkRequestBodyPeerLinkPeerSite';


export class CreatePeerLinkRequestBodyPeerLink {
    public name?: string;
    public description?: string;
    private 'peer_site'?: CreatePeerLinkRequestBodyPeerLinkPeerSite;
    public constructor(name?: string, peerSite?: CreatePeerLinkRequestBodyPeerLinkPeerSite) { 
        this['name'] = name;
        this['peer_site'] = peerSite;
    }
    public withName(name: string): CreatePeerLinkRequestBodyPeerLink {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePeerLinkRequestBodyPeerLink {
        this['description'] = description;
        return this;
    }
    public withPeerSite(peerSite: CreatePeerLinkRequestBodyPeerLinkPeerSite): CreatePeerLinkRequestBodyPeerLink {
        this['peer_site'] = peerSite;
        return this;
    }
    public set peerSite(peerSite: CreatePeerLinkRequestBodyPeerLinkPeerSite  | undefined) {
        this['peer_site'] = peerSite;
    }
    public get peerSite(): CreatePeerLinkRequestBodyPeerLinkPeerSite | undefined {
        return this['peer_site'];
    }
}