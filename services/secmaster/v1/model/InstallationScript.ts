

export class InstallationScript {
    public commands?: string;
    private 'os_type'?: string;
    public constructor() { 
    }
    public withCommands(commands: string): InstallationScript {
        this['commands'] = commands;
        return this;
    }
    public withOsType(osType: string): InstallationScript {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
}