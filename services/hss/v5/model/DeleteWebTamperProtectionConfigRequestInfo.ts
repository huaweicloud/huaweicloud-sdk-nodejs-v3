

export class DeleteWebTamperProtectionConfigRequestInfo {
    public type?: string;
    private 'protection_config_id_list'?: Array<string>;
    public constructor() { 
    }
    public withType(type: string): DeleteWebTamperProtectionConfigRequestInfo {
        this['type'] = type;
        return this;
    }
    public withProtectionConfigIdList(protectionConfigIdList: Array<string>): DeleteWebTamperProtectionConfigRequestInfo {
        this['protection_config_id_list'] = protectionConfigIdList;
        return this;
    }
    public set protectionConfigIdList(protectionConfigIdList: Array<string>  | undefined) {
        this['protection_config_id_list'] = protectionConfigIdList;
    }
    public get protectionConfigIdList(): Array<string> | undefined {
        return this['protection_config_id_list'];
    }
}