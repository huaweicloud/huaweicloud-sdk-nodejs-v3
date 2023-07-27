

export class OsExtendedVolumes {
    public id?: string;
    private 'delete_on_termination'?: boolean;
    public constructor() { 
    }
    public withId(id: string): OsExtendedVolumes {
        this['id'] = id;
        return this;
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): OsExtendedVolumes {
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