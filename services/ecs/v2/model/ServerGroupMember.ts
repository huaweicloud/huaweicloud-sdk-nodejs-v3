

export class ServerGroupMember {
    private 'instance_uuid': string | undefined;
    public constructor(instanceUuid?: any) { 
        this['instance_uuid'] = instanceUuid;
    }
    public withInstanceUuid(instanceUuid: string): ServerGroupMember {
        this['instance_uuid'] = instanceUuid;
        return this;
    }
    public set instanceUuid(instanceUuid: string | undefined) {
        this['instance_uuid'] = instanceUuid;
    }
    public get instanceUuid() {
        return this['instance_uuid'];
    }
}