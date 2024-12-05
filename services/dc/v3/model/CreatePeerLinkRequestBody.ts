import { CreatePeerLinkRequestBodyPeerLink } from './CreatePeerLinkRequestBodyPeerLink';


export class CreatePeerLinkRequestBody {
    private 'dry_run'?: boolean;
    private 'peer_link'?: CreatePeerLinkRequestBodyPeerLink;
    public constructor() { 
    }
    public withDryRun(dryRun: boolean): CreatePeerLinkRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withPeerLink(peerLink: CreatePeerLinkRequestBodyPeerLink): CreatePeerLinkRequestBody {
        this['peer_link'] = peerLink;
        return this;
    }
    public set peerLink(peerLink: CreatePeerLinkRequestBodyPeerLink  | undefined) {
        this['peer_link'] = peerLink;
    }
    public get peerLink(): CreatePeerLinkRequestBodyPeerLink | undefined {
        return this['peer_link'];
    }
}