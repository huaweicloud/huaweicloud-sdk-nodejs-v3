import { IpInfo } from './IpInfo';


export class UpdateAccessPolicyReq {
    private 'operation_type'?: UpdateAccessPolicyReqOperationTypeEnum | string;
    private 'ip_white_list'?: Array<IpInfo>;
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
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAccessPolicyReqOperationTypeEnum {
    ADD_IP = 'ADD_IP',
    DELETE_IP = 'DELETE_IP'
}
