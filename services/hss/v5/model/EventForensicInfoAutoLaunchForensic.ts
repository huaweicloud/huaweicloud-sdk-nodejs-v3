

export class EventForensicInfoAutoLaunchForensic {
    public event?: number;
    public type?: number;
    public owner?: string;
    public name?: string;
    private 'run_interval'?: string;
    public hash?: string;
    public mtime?: string;
    public description?: string;
    public path?: string;
    public constructor() { 
    }
    public withEvent(event: number): EventForensicInfoAutoLaunchForensic {
        this['event'] = event;
        return this;
    }
    public withType(type: number): EventForensicInfoAutoLaunchForensic {
        this['type'] = type;
        return this;
    }
    public withOwner(owner: string): EventForensicInfoAutoLaunchForensic {
        this['owner'] = owner;
        return this;
    }
    public withName(name: string): EventForensicInfoAutoLaunchForensic {
        this['name'] = name;
        return this;
    }
    public withRunInterval(runInterval: string): EventForensicInfoAutoLaunchForensic {
        this['run_interval'] = runInterval;
        return this;
    }
    public set runInterval(runInterval: string  | undefined) {
        this['run_interval'] = runInterval;
    }
    public get runInterval(): string | undefined {
        return this['run_interval'];
    }
    public withHash(hash: string): EventForensicInfoAutoLaunchForensic {
        this['hash'] = hash;
        return this;
    }
    public withMtime(mtime: string): EventForensicInfoAutoLaunchForensic {
        this['mtime'] = mtime;
        return this;
    }
    public withDescription(description: string): EventForensicInfoAutoLaunchForensic {
        this['description'] = description;
        return this;
    }
    public withPath(path: string): EventForensicInfoAutoLaunchForensic {
        this['path'] = path;
        return this;
    }
}