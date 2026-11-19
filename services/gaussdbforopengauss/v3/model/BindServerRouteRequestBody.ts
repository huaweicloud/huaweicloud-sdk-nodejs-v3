

export class BindServerRouteRequestBody {
    public operate?: BindServerRouteRequestBodyOperateEnum | string;
    private 'target_server_ips'?: Array<string>;
    public constructor(operate?: string, targetServerIps?: Array<string>) { 
        this['operate'] = operate;
        this['target_server_ips'] = targetServerIps;
    }
    public withOperate(operate: BindServerRouteRequestBodyOperateEnum | string): BindServerRouteRequestBody {
        this['operate'] = operate;
        return this;
    }
    public withTargetServerIps(targetServerIps: Array<string>): BindServerRouteRequestBody {
        this['target_server_ips'] = targetServerIps;
        return this;
    }
    public set targetServerIps(targetServerIps: Array<string>  | undefined) {
        this['target_server_ips'] = targetServerIps;
    }
    public get targetServerIps(): Array<string> | undefined {
        return this['target_server_ips'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BindServerRouteRequestBodyOperateEnum {
    ADD = 'add',
    DELETE = 'delete'
}
