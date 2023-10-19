import { CentralNetworkPolicyDocument } from './CentralNetworkPolicyDocument';


export class CreateCentralNetworkPolicyRequestBody {
    private 'central_network_policy_document'?: CentralNetworkPolicyDocument;
    public constructor(centralNetworkPolicyDocument?: CentralNetworkPolicyDocument) { 
        this['central_network_policy_document'] = centralNetworkPolicyDocument;
    }
    public withCentralNetworkPolicyDocument(centralNetworkPolicyDocument: CentralNetworkPolicyDocument): CreateCentralNetworkPolicyRequestBody {
        this['central_network_policy_document'] = centralNetworkPolicyDocument;
        return this;
    }
    public set centralNetworkPolicyDocument(centralNetworkPolicyDocument: CentralNetworkPolicyDocument  | undefined) {
        this['central_network_policy_document'] = centralNetworkPolicyDocument;
    }
    public get centralNetworkPolicyDocument(): CentralNetworkPolicyDocument | undefined {
        return this['central_network_policy_document'];
    }
}