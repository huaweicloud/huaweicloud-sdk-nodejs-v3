import { CreateCentralNetworkGdgwAttachment } from './CreateCentralNetworkGdgwAttachment';


export class CreateCentralNetworkGdgwAttachmentRequestBody {
    private 'central_network_gdgw_attachment'?: CreateCentralNetworkGdgwAttachment;
    public constructor(centralNetworkGdgwAttachment?: CreateCentralNetworkGdgwAttachment) { 
        this['central_network_gdgw_attachment'] = centralNetworkGdgwAttachment;
    }
    public withCentralNetworkGdgwAttachment(centralNetworkGdgwAttachment: CreateCentralNetworkGdgwAttachment): CreateCentralNetworkGdgwAttachmentRequestBody {
        this['central_network_gdgw_attachment'] = centralNetworkGdgwAttachment;
        return this;
    }
    public set centralNetworkGdgwAttachment(centralNetworkGdgwAttachment: CreateCentralNetworkGdgwAttachment  | undefined) {
        this['central_network_gdgw_attachment'] = centralNetworkGdgwAttachment;
    }
    public get centralNetworkGdgwAttachment(): CreateCentralNetworkGdgwAttachment | undefined {
        return this['central_network_gdgw_attachment'];
    }
}