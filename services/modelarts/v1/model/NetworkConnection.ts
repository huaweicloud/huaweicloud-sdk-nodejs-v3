import { PeerConnectionItem } from './PeerConnectionItem';


export class NetworkConnection {
    public peerConnectionList?: Array<PeerConnectionItem>;
    public constructor() { 
    }
    public withPeerConnectionList(peerConnectionList: Array<PeerConnectionItem>): NetworkConnection {
        this['peerConnectionList'] = peerConnectionList;
        return this;
    }
}