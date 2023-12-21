

export class RebootCbhRequestBody {
    private 'server_id'?: object;
    private 'reboot_type'?: string;
    public constructor(serverId?: object, rebootType?: string) { 
        this['server_id'] = serverId;
        this['reboot_type'] = rebootType;
    }
    public withServerId(serverId: object): RebootCbhRequestBody {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: object  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): object | undefined {
        return this['server_id'];
    }
    public withRebootType(rebootType: string): RebootCbhRequestBody {
        this['reboot_type'] = rebootType;
        return this;
    }
    public set rebootType(rebootType: string  | undefined) {
        this['reboot_type'] = rebootType;
    }
    public get rebootType(): string | undefined {
        return this['reboot_type'];
    }
}