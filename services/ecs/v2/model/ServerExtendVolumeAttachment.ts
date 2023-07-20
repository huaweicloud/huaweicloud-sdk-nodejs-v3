

export class ServerExtendVolumeAttachment {
    public id?: string;
    private 'delete_on_termination'?: string;
    public bootIndex?: string;
    public device?: string;
    public constructor(id?: string, deleteOnTermination?: string, device?: string) { 
        this['id'] = id;
        this['delete_on_termination'] = deleteOnTermination;
        this['device'] = device;
    }
    public withId(id: string): ServerExtendVolumeAttachment {
        this['id'] = id;
        return this;
    }
    public withDeleteOnTermination(deleteOnTermination: string): ServerExtendVolumeAttachment {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: string  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): string | undefined {
        return this['delete_on_termination'];
    }
    public withBootIndex(bootIndex: string): ServerExtendVolumeAttachment {
        this['bootIndex'] = bootIndex;
        return this;
    }
    public withDevice(device: string): ServerExtendVolumeAttachment {
        this['device'] = device;
        return this;
    }
}