

export class VolumeAttach {
    public id?: string;
    private 'delete_on_termination'?: boolean;
    public device?: string;
    public bootIndex?: string;
    public size?: number;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): VolumeAttach {
        this['id'] = id;
        return this;
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): VolumeAttach {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): boolean | undefined {
        return this['delete_on_termination'];
    }
    public withDevice(device: string): VolumeAttach {
        this['device'] = device;
        return this;
    }
    public withBootIndex(bootIndex: string): VolumeAttach {
        this['bootIndex'] = bootIndex;
        return this;
    }
    public withSize(size: number): VolumeAttach {
        this['size'] = size;
        return this;
    }
}