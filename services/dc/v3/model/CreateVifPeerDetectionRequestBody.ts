import { CreateVifPeerDetectionRequestBodyVifPeerDetection } from './CreateVifPeerDetectionRequestBodyVifPeerDetection';


export class CreateVifPeerDetectionRequestBody {
    private 'vif_peer_detection'?: CreateVifPeerDetectionRequestBodyVifPeerDetection;
    public constructor() { 
    }
    public withVifPeerDetection(vifPeerDetection: CreateVifPeerDetectionRequestBodyVifPeerDetection): CreateVifPeerDetectionRequestBody {
        this['vif_peer_detection'] = vifPeerDetection;
        return this;
    }
    public set vifPeerDetection(vifPeerDetection: CreateVifPeerDetectionRequestBodyVifPeerDetection  | undefined) {
        this['vif_peer_detection'] = vifPeerDetection;
    }
    public get vifPeerDetection(): CreateVifPeerDetectionRequestBodyVifPeerDetection | undefined {
        return this['vif_peer_detection'];
    }
}