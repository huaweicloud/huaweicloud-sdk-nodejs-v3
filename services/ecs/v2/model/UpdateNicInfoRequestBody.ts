import { InterfaceAttachment } from './InterfaceAttachment';


export class UpdateNicInfoRequestBody {
    private 'interface_attachment'?: InterfaceAttachment;
    public constructor(interfaceAttachment?: InterfaceAttachment) { 
        this['interface_attachment'] = interfaceAttachment;
    }
    public withInterfaceAttachment(interfaceAttachment: InterfaceAttachment): UpdateNicInfoRequestBody {
        this['interface_attachment'] = interfaceAttachment;
        return this;
    }
    public set interfaceAttachment(interfaceAttachment: InterfaceAttachment  | undefined) {
        this['interface_attachment'] = interfaceAttachment;
    }
    public get interfaceAttachment(): InterfaceAttachment | undefined {
        return this['interface_attachment'];
    }
}