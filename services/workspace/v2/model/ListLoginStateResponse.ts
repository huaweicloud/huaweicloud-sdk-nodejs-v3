
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLoginStateResponse extends SdkResponse {
    private 'in_use_num'?: number;
    private 'unregistered_num'?: number;
    private 'unable_to_connect_num'?: number;
    private 'ready_num'?: number;
    private 'disconnected_num'?: number;
    public constructor() { 
        super();
    }
    public withInUseNum(inUseNum: number): ListLoginStateResponse {
        this['in_use_num'] = inUseNum;
        return this;
    }
    public set inUseNum(inUseNum: number  | undefined) {
        this['in_use_num'] = inUseNum;
    }
    public get inUseNum(): number | undefined {
        return this['in_use_num'];
    }
    public withUnregisteredNum(unregisteredNum: number): ListLoginStateResponse {
        this['unregistered_num'] = unregisteredNum;
        return this;
    }
    public set unregisteredNum(unregisteredNum: number  | undefined) {
        this['unregistered_num'] = unregisteredNum;
    }
    public get unregisteredNum(): number | undefined {
        return this['unregistered_num'];
    }
    public withUnableToConnectNum(unableToConnectNum: number): ListLoginStateResponse {
        this['unable_to_connect_num'] = unableToConnectNum;
        return this;
    }
    public set unableToConnectNum(unableToConnectNum: number  | undefined) {
        this['unable_to_connect_num'] = unableToConnectNum;
    }
    public get unableToConnectNum(): number | undefined {
        return this['unable_to_connect_num'];
    }
    public withReadyNum(readyNum: number): ListLoginStateResponse {
        this['ready_num'] = readyNum;
        return this;
    }
    public set readyNum(readyNum: number  | undefined) {
        this['ready_num'] = readyNum;
    }
    public get readyNum(): number | undefined {
        return this['ready_num'];
    }
    public withDisconnectedNum(disconnectedNum: number): ListLoginStateResponse {
        this['disconnected_num'] = disconnectedNum;
        return this;
    }
    public set disconnectedNum(disconnectedNum: number  | undefined) {
        this['disconnected_num'] = disconnectedNum;
    }
    public get disconnectedNum(): number | undefined {
        return this['disconnected_num'];
    }
}