

export class AgentRemovePathReq {
    private 'remove_path'?: Array<string>;
    public constructor(removePath?: Array<string>) { 
        this['remove_path'] = removePath;
    }
    public withRemovePath(removePath: Array<string>): AgentRemovePathReq {
        this['remove_path'] = removePath;
        return this;
    }
    public set removePath(removePath: Array<string>  | undefined) {
        this['remove_path'] = removePath;
    }
    public get removePath(): Array<string> | undefined {
        return this['remove_path'];
    }
}