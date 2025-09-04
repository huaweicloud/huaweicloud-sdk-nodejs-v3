

export class ExtDevice {
    public source?: string;
    public destination?: string;
    private 'cgroup_permissions'?: string;
    public constructor(source?: string, destination?: string) { 
        this['source'] = source;
        this['destination'] = destination;
    }
    public withSource(source: string): ExtDevice {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: string): ExtDevice {
        this['destination'] = destination;
        return this;
    }
    public withCgroupPermissions(cgroupPermissions: string): ExtDevice {
        this['cgroup_permissions'] = cgroupPermissions;
        return this;
    }
    public set cgroupPermissions(cgroupPermissions: string  | undefined) {
        this['cgroup_permissions'] = cgroupPermissions;
    }
    public get cgroupPermissions(): string | undefined {
        return this['cgroup_permissions'];
    }
}