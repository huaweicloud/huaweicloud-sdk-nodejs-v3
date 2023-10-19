

export class EIPSwitchStatusVO {
    private 'object_id'?: string;
    private 'fail_eip_id_list'?: Array<string>;
    public constructor() { 
    }
    public withObjectId(objectId: string): EIPSwitchStatusVO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withFailEipIdList(failEipIdList: Array<string>): EIPSwitchStatusVO {
        this['fail_eip_id_list'] = failEipIdList;
        return this;
    }
    public set failEipIdList(failEipIdList: Array<string>  | undefined) {
        this['fail_eip_id_list'] = failEipIdList;
    }
    public get failEipIdList(): Array<string> | undefined {
        return this['fail_eip_id_list'];
    }
}