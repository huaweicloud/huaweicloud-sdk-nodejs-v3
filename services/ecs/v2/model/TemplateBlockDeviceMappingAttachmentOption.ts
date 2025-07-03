

export class TemplateBlockDeviceMappingAttachmentOption {
    private 'boot_index'?: number;
    private 'delete_on_termination'?: boolean;
    public constructor() { 
    }
    public withBootIndex(bootIndex: number): TemplateBlockDeviceMappingAttachmentOption {
        this['boot_index'] = bootIndex;
        return this;
    }
    public set bootIndex(bootIndex: number  | undefined) {
        this['boot_index'] = bootIndex;
    }
    public get bootIndex(): number | undefined {
        return this['boot_index'];
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): TemplateBlockDeviceMappingAttachmentOption {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): boolean | undefined {
        return this['delete_on_termination'];
    }
}