

export class SwitchFirewallEipProtectionRespData {
    private 'protection_status'?: number;
    public id?: string;
    private 'object_id'?: string;
    public constructor() { 
    }
    public withProtectionStatus(protectionStatus: number): SwitchFirewallEipProtectionRespData {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: number  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): number | undefined {
        return this['protection_status'];
    }
    public withId(id: string): SwitchFirewallEipProtectionRespData {
        this['id'] = id;
        return this;
    }
    public withObjectId(objectId: string): SwitchFirewallEipProtectionRespData {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
}