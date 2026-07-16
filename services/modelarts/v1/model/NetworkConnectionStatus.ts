import { PeerConnectionStatus } from './PeerConnectionStatus';
import { SfsTurboConnectionStatus } from './SfsTurboConnectionStatus';


export class NetworkConnectionStatus {
    public peerConnectionStatus?: Array<PeerConnectionStatus>;
    public sfsTurboStatus?: Array<SfsTurboConnectionStatus>;
    public constructor() { 
    }
    public withPeerConnectionStatus(peerConnectionStatus: Array<PeerConnectionStatus>): NetworkConnectionStatus {
        this['peerConnectionStatus'] = peerConnectionStatus;
        return this;
    }
    public withSfsTurboStatus(sfsTurboStatus: Array<SfsTurboConnectionStatus>): NetworkConnectionStatus {
        this['sfsTurboStatus'] = sfsTurboStatus;
        return this;
    }
}