import { UpdateCentralNetworkGdgwAttachment } from './UpdateCentralNetworkGdgwAttachment';


export class UpdateCentralNetworkGdgwAttachmentRequestBody {
    private 'central_network_gdgw_attachment'?: UpdateCentralNetworkGdgwAttachment;
    public constructor(centralNetworkGdgwAttachment?: UpdateCentralNetworkGdgwAttachment) { 
        this['central_network_gdgw_attachment'] = centralNetworkGdgwAttachment;
    }
    public withCentralNetworkGdgwAttachment(centralNetworkGdgwAttachment: UpdateCentralNetworkGdgwAttachment): UpdateCentralNetworkGdgwAttachmentRequestBody {
        this['central_network_gdgw_attachment'] = centralNetworkGdgwAttachment;
        return this;
    }
    public set centralNetworkGdgwAttachment(centralNetworkGdgwAttachment: UpdateCentralNetworkGdgwAttachment  | undefined) {
        this['central_network_gdgw_attachment'] = centralNetworkGdgwAttachment;
    }
    public get centralNetworkGdgwAttachment(): UpdateCentralNetworkGdgwAttachment | undefined {
        return this['central_network_gdgw_attachment'];
    }
}