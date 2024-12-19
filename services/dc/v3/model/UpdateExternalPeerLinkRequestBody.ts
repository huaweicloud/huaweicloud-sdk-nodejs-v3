import { UpdateExternalPeerLinkRequestBodyPeerLink } from './UpdateExternalPeerLinkRequestBodyPeerLink';


export class UpdateExternalPeerLinkRequestBody {
    private 'peer_link'?: UpdateExternalPeerLinkRequestBodyPeerLink;
    public constructor() { 
    }
    public withPeerLink(peerLink: UpdateExternalPeerLinkRequestBodyPeerLink): UpdateExternalPeerLinkRequestBody {
        this['peer_link'] = peerLink;
        return this;
    }
    public set peerLink(peerLink: UpdateExternalPeerLinkRequestBodyPeerLink  | undefined) {
        this['peer_link'] = peerLink;
    }
    public get peerLink(): UpdateExternalPeerLinkRequestBodyPeerLink | undefined {
        return this['peer_link'];
    }
}