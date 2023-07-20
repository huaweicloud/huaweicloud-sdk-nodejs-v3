

export class AgentAddPathReq {
    private 'add_path'?: Array<string>;
    public constructor(addPath?: Array<string>) { 
        this['add_path'] = addPath;
    }
    public withAddPath(addPath: Array<string>): AgentAddPathReq {
        this['add_path'] = addPath;
        return this;
    }
    public set addPath(addPath: Array<string>  | undefined) {
        this['add_path'] = addPath;
    }
    public get addPath(): Array<string> | undefined {
        return this['add_path'];
    }
}