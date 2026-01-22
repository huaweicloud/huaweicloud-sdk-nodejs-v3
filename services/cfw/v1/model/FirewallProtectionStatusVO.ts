

export class FirewallProtectionStatusVO {
    private 'protection_status'?: number;
    public id?: string;
    private 'object_id'?: string;
    private 'failed_eip_list'?: Array<string>;
    private 'failed_eip_id_list'?: Array<string>;
    public constructor() { 
    }
    public withProtectionStatus(protectionStatus: number): FirewallProtectionStatusVO {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: number  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): number | undefined {
        return this['protection_status'];
    }
    public withId(id: string): FirewallProtectionStatusVO {
        this['id'] = id;
        return this;
    }
    public withObjectId(objectId: string): FirewallProtectionStatusVO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withFailedEipList(failedEipList: Array<string>): FirewallProtectionStatusVO {
        this['failed_eip_list'] = failedEipList;
        return this;
    }
    public set failedEipList(failedEipList: Array<string>  | undefined) {
        this['failed_eip_list'] = failedEipList;
    }
    public get failedEipList(): Array<string> | undefined {
        return this['failed_eip_list'];
    }
    public withFailedEipIdList(failedEipIdList: Array<string>): FirewallProtectionStatusVO {
        this['failed_eip_id_list'] = failedEipIdList;
        return this;
    }
    public set failedEipIdList(failedEipIdList: Array<string>  | undefined) {
        this['failed_eip_id_list'] = failedEipIdList;
    }
    public get failedEipIdList(): Array<string> | undefined {
        return this['failed_eip_id_list'];
    }
}