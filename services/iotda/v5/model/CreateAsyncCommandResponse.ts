
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAsyncCommandResponse extends SdkResponse {
    private 'device_id'?: string;
    private 'command_id'?: string;
    private 'service_id'?: string;
    private 'command_name'?: string;
    public paras?: object;
    private 'expire_time'?: number;
    public status?: string;
    private 'created_time'?: string;
    private 'send_strategy'?: string;
    public constructor() { 
        super();
    }
    public withDeviceId(deviceId: string): CreateAsyncCommandResponse {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withCommandId(commandId: string): CreateAsyncCommandResponse {
        this['command_id'] = commandId;
        return this;
    }
    public set commandId(commandId: string  | undefined) {
        this['command_id'] = commandId;
    }
    public get commandId(): string | undefined {
        return this['command_id'];
    }
    public withServiceId(serviceId: string): CreateAsyncCommandResponse {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withCommandName(commandName: string): CreateAsyncCommandResponse {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string  | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName(): string | undefined {
        return this['command_name'];
    }
    public withParas(paras: object): CreateAsyncCommandResponse {
        this['paras'] = paras;
        return this;
    }
    public withExpireTime(expireTime: number): CreateAsyncCommandResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withStatus(status: string): CreateAsyncCommandResponse {
        this['status'] = status;
        return this;
    }
    public withCreatedTime(createdTime: string): CreateAsyncCommandResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withSendStrategy(sendStrategy: string): CreateAsyncCommandResponse {
        this['send_strategy'] = sendStrategy;
        return this;
    }
    public set sendStrategy(sendStrategy: string  | undefined) {
        this['send_strategy'] = sendStrategy;
    }
    public get sendStrategy(): string | undefined {
        return this['send_strategy'];
    }
}