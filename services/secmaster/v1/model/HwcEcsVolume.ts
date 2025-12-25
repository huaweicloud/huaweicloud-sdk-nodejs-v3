

export class HwcEcsVolume {
    public id?: string;
    private 'delete_on_termination'?: string;
    private 'boot_index'?: string;
    public device?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): HwcEcsVolume {
        this['id'] = id;
        return this;
    }
    public withDeleteOnTermination(deleteOnTermination: string): HwcEcsVolume {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: string  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): string | undefined {
        return this['delete_on_termination'];
    }
    public withBootIndex(bootIndex: string): HwcEcsVolume {
        this['boot_index'] = bootIndex;
        return this;
    }
    public set bootIndex(bootIndex: string  | undefined) {
        this['boot_index'] = bootIndex;
    }
    public get bootIndex(): string | undefined {
        return this['boot_index'];
    }
    public withDevice(device: string): HwcEcsVolume {
        this['device'] = device;
        return this;
    }
}