
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRestartPolicyResponse extends SdkResponse {
    private 'restart_server'?: boolean;
    private 'restart_policy'?: object;
    public constructor() { 
        super();
    }
    public withRestartServer(restartServer: boolean): ShowRestartPolicyResponse {
        this['restart_server'] = restartServer;
        return this;
    }
    public set restartServer(restartServer: boolean  | undefined) {
        this['restart_server'] = restartServer;
    }
    public get restartServer(): boolean | undefined {
        return this['restart_server'];
    }
    public withRestartPolicy(restartPolicy: object): ShowRestartPolicyResponse {
        this['restart_policy'] = restartPolicy;
        return this;
    }
    public set restartPolicy(restartPolicy: object  | undefined) {
        this['restart_policy'] = restartPolicy;
    }
    public get restartPolicy(): object | undefined {
        return this['restart_policy'];
    }
}