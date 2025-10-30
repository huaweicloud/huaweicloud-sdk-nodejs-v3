

export class OperateHostRequestInfo {
    private 'operate_type'?: OperateHostRequestInfoOperateTypeEnum | string;
    private 'host_id_list'?: Array<string>;
    public constructor(operateType?: string, hostIdList?: Array<string>) { 
        this['operate_type'] = operateType;
        this['host_id_list'] = hostIdList;
    }
    public withOperateType(operateType: OperateHostRequestInfoOperateTypeEnum | string): OperateHostRequestInfo {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: OperateHostRequestInfoOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): OperateHostRequestInfoOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
    public withHostIdList(hostIdList: Array<string>): OperateHostRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OperateHostRequestInfoOperateTypeEnum {
    IGNORE = 'ignore',
    UN_IGNORE = 'un_ignore'
}
