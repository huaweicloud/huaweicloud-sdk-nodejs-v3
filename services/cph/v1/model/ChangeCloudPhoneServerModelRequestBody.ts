import { ChangeCloudPhoneServerModelRequestBodyExtendParam } from './ChangeCloudPhoneServerModelRequestBodyExtendParam';


export class ChangeCloudPhoneServerModelRequestBody {
    private 'server_id'?: string;
    private 'server_model_name'?: string;
    private 'phone_model_name'?: string;
    private 'extend_param'?: ChangeCloudPhoneServerModelRequestBodyExtendParam;
    public constructor(serverId?: string, serverModelName?: string, phoneModelName?: string) { 
        this['server_id'] = serverId;
        this['server_model_name'] = serverModelName;
        this['phone_model_name'] = phoneModelName;
    }
    public withServerId(serverId: string): ChangeCloudPhoneServerModelRequestBody {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withServerModelName(serverModelName: string): ChangeCloudPhoneServerModelRequestBody {
        this['server_model_name'] = serverModelName;
        return this;
    }
    public set serverModelName(serverModelName: string  | undefined) {
        this['server_model_name'] = serverModelName;
    }
    public get serverModelName(): string | undefined {
        return this['server_model_name'];
    }
    public withPhoneModelName(phoneModelName: string): ChangeCloudPhoneServerModelRequestBody {
        this['phone_model_name'] = phoneModelName;
        return this;
    }
    public set phoneModelName(phoneModelName: string  | undefined) {
        this['phone_model_name'] = phoneModelName;
    }
    public get phoneModelName(): string | undefined {
        return this['phone_model_name'];
    }
    public withExtendParam(extendParam: ChangeCloudPhoneServerModelRequestBodyExtendParam): ChangeCloudPhoneServerModelRequestBody {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: ChangeCloudPhoneServerModelRequestBodyExtendParam  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): ChangeCloudPhoneServerModelRequestBodyExtendParam | undefined {
        return this['extend_param'];
    }
}