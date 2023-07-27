import { InterfaceAttachmentsReq } from './InterfaceAttachmentsReq';


export class UpdateBaremetalServerInterfaceAttachmentsReq {
    private 'interface_attachment'?: InterfaceAttachmentsReq;
    public constructor(interfaceAttachment?: InterfaceAttachmentsReq) { 
        this['interface_attachment'] = interfaceAttachment;
    }
    public withInterfaceAttachment(interfaceAttachment: InterfaceAttachmentsReq): UpdateBaremetalServerInterfaceAttachmentsReq {
        this['interface_attachment'] = interfaceAttachment;
        return this;
    }
    public set interfaceAttachment(interfaceAttachment: InterfaceAttachmentsReq  | undefined) {
        this['interface_attachment'] = interfaceAttachment;
    }
    public get interfaceAttachment(): InterfaceAttachmentsReq | undefined {
        return this['interface_attachment'];
    }
}