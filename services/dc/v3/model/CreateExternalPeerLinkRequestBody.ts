import { CreateExternalPeerLinkRequestBodyPeerLink } from './CreateExternalPeerLinkRequestBodyPeerLink';


export class CreateExternalPeerLinkRequestBody {
    private 'peer_link'?: CreateExternalPeerLinkRequestBodyPeerLink;
    public constructor(peerLink?: CreateExternalPeerLinkRequestBodyPeerLink) { 
        this['peer_link'] = peerLink;
    }
    public withPeerLink(peerLink: CreateExternalPeerLinkRequestBodyPeerLink): CreateExternalPeerLinkRequestBody {
        this['peer_link'] = peerLink;
        return this;
    }
    public set peerLink(peerLink: CreateExternalPeerLinkRequestBodyPeerLink  | undefined) {
        this['peer_link'] = peerLink;
    }
    public get peerLink(): CreateExternalPeerLinkRequestBodyPeerLink | undefined {
        return this['peer_link'];
    }
}