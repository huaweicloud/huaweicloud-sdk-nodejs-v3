import { CreateExternalPeerLinkRequestBodyPeerLinkPeerSite } from './CreateExternalPeerLinkRequestBodyPeerLinkPeerSite';


export class CreateExternalPeerLinkRequestBodyPeerLink {
    public name?: string;
    public description?: string;
    private 'peer_site'?: CreateExternalPeerLinkRequestBodyPeerLinkPeerSite;
    public constructor(name?: string, peerSite?: CreateExternalPeerLinkRequestBodyPeerLinkPeerSite) { 
        this['name'] = name;
        this['peer_site'] = peerSite;
    }
    public withName(name: string): CreateExternalPeerLinkRequestBodyPeerLink {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateExternalPeerLinkRequestBodyPeerLink {
        this['description'] = description;
        return this;
    }
    public withPeerSite(peerSite: CreateExternalPeerLinkRequestBodyPeerLinkPeerSite): CreateExternalPeerLinkRequestBodyPeerLink {
        this['peer_site'] = peerSite;
        return this;
    }
    public set peerSite(peerSite: CreateExternalPeerLinkRequestBodyPeerLinkPeerSite  | undefined) {
        this['peer_site'] = peerSite;
    }
    public get peerSite(): CreateExternalPeerLinkRequestBodyPeerLinkPeerSite | undefined {
        return this['peer_site'];
    }
}