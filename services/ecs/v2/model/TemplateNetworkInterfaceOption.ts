import { TemplateNetworkInterfaceAttachmentOption } from './TemplateNetworkInterfaceAttachmentOption';


export class TemplateNetworkInterfaceOption {
    private 'virsubnet_id'?: string;
    public attachment?: TemplateNetworkInterfaceAttachmentOption;
    public constructor() { 
    }
    public withVirsubnetId(virsubnetId: string): TemplateNetworkInterfaceOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withAttachment(attachment: TemplateNetworkInterfaceAttachmentOption): TemplateNetworkInterfaceOption {
        this['attachment'] = attachment;
        return this;
    }
}