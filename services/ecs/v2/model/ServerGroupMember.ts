

export class ServerGroupMember {
    private 'instance_uuid'?: string;
    public constructor(instanceUuid?: string) { 
        this['instance_uuid'] = instanceUuid;
    }
    public withInstanceUuid(instanceUuid: string): ServerGroupMember {
        this['instance_uuid'] = instanceUuid;
        return this;
    }
    public set instanceUuid(instanceUuid: string  | undefined) {
        this['instance_uuid'] = instanceUuid;
    }
    public get instanceUuid(): string | undefined {
        return this['instance_uuid'];
    }
}