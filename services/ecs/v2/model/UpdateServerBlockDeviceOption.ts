

export class UpdateServerBlockDeviceOption {
    private 'delete_on_termination': boolean | undefined;
    public constructor(deleteOnTermination?: any) { 
        this['delete_on_termination'] = deleteOnTermination;
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): UpdateServerBlockDeviceOption {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination() {
        return this['delete_on_termination'];
    }
}