

export class AgentAddPathReq {
    private 'add_path': Array<string> | undefined;
    public constructor(addPath?: any) { 
        this['add_path'] = addPath;
    }
    public withAddPath(addPath: Array<string>): AgentAddPathReq {
        this['add_path'] = addPath;
        return this;
    }
    public set addPath(addPath: Array<string> | undefined) {
        this['add_path'] = addPath;
    }
    public get addPath() {
        return this['add_path'];
    }
}