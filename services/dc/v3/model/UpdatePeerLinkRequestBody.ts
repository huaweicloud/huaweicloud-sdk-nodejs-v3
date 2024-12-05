import { UpdatePeerLinkRequestBodyPeerLink } from './UpdatePeerLinkRequestBodyPeerLink';


export class UpdatePeerLinkRequestBody {
    private 'dry_run'?: boolean;
    private 'peer_link'?: UpdatePeerLinkRequestBodyPeerLink;
    public constructor() { 
    }
    public withDryRun(dryRun: boolean): UpdatePeerLinkRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withPeerLink(peerLink: UpdatePeerLinkRequestBodyPeerLink): UpdatePeerLinkRequestBody {
        this['peer_link'] = peerLink;
        return this;
    }
    public set peerLink(peerLink: UpdatePeerLinkRequestBodyPeerLink  | undefined) {
        this['peer_link'] = peerLink;
    }
    public get peerLink(): UpdatePeerLinkRequestBodyPeerLink | undefined {
        return this['peer_link'];
    }
}