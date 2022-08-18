

export class CustomImage {
    public enabled?: boolean;
    public image?: string;
    public command?: string;
    public args?: string;
    private 'working_dir'?: string | undefined;
    public uid?: string;
    public gid?: string;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): CustomImage {
        this['enabled'] = enabled;
        return this;
    }
    public withImage(image: string): CustomImage {
        this['image'] = image;
        return this;
    }
    public withCommand(command: string): CustomImage {
        this['command'] = command;
        return this;
    }
    public withArgs(args: string): CustomImage {
        this['args'] = args;
        return this;
    }
    public withWorkingDir(workingDir: string): CustomImage {
        this['working_dir'] = workingDir;
        return this;
    }
    public set workingDir(workingDir: string | undefined) {
        this['working_dir'] = workingDir;
    }
    public get workingDir() {
        return this['working_dir'];
    }
    public withUid(uid: string): CustomImage {
        this['uid'] = uid;
        return this;
    }
    public withGid(gid: string): CustomImage {
        this['gid'] = gid;
        return this;
    }
}