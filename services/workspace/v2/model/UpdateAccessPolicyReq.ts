import { IpInfo } from './IpInfo';


export class UpdateAccessPolicyReq {
    private 'operation_type'?: UpdateAccessPolicyReqOperationTypeEnum | string;
    private 'ip_white_list'?: Array<IpInfo>;
    private 'is_enable'?: boolean;
    private 'is_block_all'?: boolean;
    public constructor() { 
    }
    public withOperationType(operationType: UpdateAccessPolicyReqOperationTypeEnum | string): UpdateAccessPolicyReq {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: UpdateAccessPolicyReqOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): UpdateAccessPolicyReqOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withIpWhiteList(ipWhiteList: Array<IpInfo>): UpdateAccessPolicyReq {
        this['ip_white_list'] = ipWhiteList;
        return this;
    }
    public set ipWhiteList(ipWhiteList: Array<IpInfo>  | undefined) {
        this['ip_white_list'] = ipWhiteList;
    }
    public get ipWhiteList(): Array<IpInfo> | undefined {
        return this['ip_white_list'];
    }
    public withIsEnable(isEnable: boolean): UpdateAccessPolicyReq {
        this['is_enable'] = isEnable;
        return this;
    }
    public set isEnable(isEnable: boolean  | undefined) {
        this['is_enable'] = isEnable;
    }
    public get isEnable(): boolean | undefined {
        return this['is_enable'];
    }
    public withIsBlockAll(isBlockAll: boolean): UpdateAccessPolicyReq {
        this['is_block_all'] = isBlockAll;
        return this;
    }
    public set isBlockAll(isBlockAll: boolean  | undefined) {
        this['is_block_all'] = isBlockAll;
    }
    public get isBlockAll(): boolean | undefined {
        return this['is_block_all'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAccessPolicyReqOperationTypeEnum {
    ADD_IP = 'ADD_IP',
    DELETE_IP = 'DELETE_IP'
}
