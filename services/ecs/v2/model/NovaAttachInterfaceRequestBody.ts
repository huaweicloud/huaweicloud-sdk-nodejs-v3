import { NovaAttachInterfaceOption } from './NovaAttachInterfaceOption';


export class NovaAttachInterfaceRequestBody {
    public interfaceAttachment?: NovaAttachInterfaceOption;
    public constructor(interfaceAttachment?: NovaAttachInterfaceOption) { 
        this['interfaceAttachment'] = interfaceAttachment;
    }
    public withInterfaceAttachment(interfaceAttachment: NovaAttachInterfaceOption): NovaAttachInterfaceRequestBody {
        this['interfaceAttachment'] = interfaceAttachment;
        return this;
    }
}