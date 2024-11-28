import { ExcludePath } from './ExcludePath';


export class AgentAddPathReq {
    private 'add_path'?: Array<string>;
    private 'exclude_path'?: Array<ExcludePath>;
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
    public withExcludePath(excludePath: Array<ExcludePath>): AgentAddPathReq {
        this['exclude_path'] = excludePath;
        return this;
    }
    public set excludePath(excludePath: Array<ExcludePath>  | undefined) {
        this['exclude_path'] = excludePath;
    }
    public get excludePath(): Array<ExcludePath> | undefined {
        return this['exclude_path'];
    }
}