

export class OsExtendedVolumesInfo {
    public id?: string;
    private 'delete_on_termination'?: string;
    public bootIndex?: OsExtendedVolumesInfoBootIndexEnum | string;
    public device?: string;
    public constructor() { 
    }
    public withId(id: string): OsExtendedVolumesInfo {
        this['id'] = id;
        return this;
    }
    public withDeleteOnTermination(deleteOnTermination: string): OsExtendedVolumesInfo {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: string  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): string | undefined {
        return this['delete_on_termination'];
    }
    public withBootIndex(bootIndex: OsExtendedVolumesInfoBootIndexEnum | string): OsExtendedVolumesInfo {
        this['bootIndex'] = bootIndex;
        return this;
    }
    public withDevice(device: string): OsExtendedVolumesInfo {
        this['device'] = device;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OsExtendedVolumesInfoBootIndexEnum {
    E_0 = '0',
    E_1 = '-1'
}
