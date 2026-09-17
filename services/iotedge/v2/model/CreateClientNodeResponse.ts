
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClientNodeResponse extends SdkResponse {
    private 'channel_id'?: string;
    private 'node_id'?: string;
    private 'allotted_time'?: string;
    private 'update_time'?: string;
    private 'synchronized_time'?: string;
    private 'synchronized_status'?: boolean;
    public constructor() { 
        super();
    }
    public withChannelId(channelId: string): CreateClientNodeResponse {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withNodeId(nodeId: string): CreateClientNodeResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withAllottedTime(allottedTime: string): CreateClientNodeResponse {
        this['allotted_time'] = allottedTime;
        return this;
    }
    public set allottedTime(allottedTime: string  | undefined) {
        this['allotted_time'] = allottedTime;
    }
    public get allottedTime(): string | undefined {
        return this['allotted_time'];
    }
    public withUpdateTime(updateTime: string): CreateClientNodeResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withSynchronizedTime(synchronizedTime: string): CreateClientNodeResponse {
        this['synchronized_time'] = synchronizedTime;
        return this;
    }
    public set synchronizedTime(synchronizedTime: string  | undefined) {
        this['synchronized_time'] = synchronizedTime;
    }
    public get synchronizedTime(): string | undefined {
        return this['synchronized_time'];
    }
    public withSynchronizedStatus(synchronizedStatus: boolean): CreateClientNodeResponse {
        this['synchronized_status'] = synchronizedStatus;
        return this;
    }
    public set synchronizedStatus(synchronizedStatus: boolean  | undefined) {
        this['synchronized_status'] = synchronizedStatus;
    }
    public get synchronizedStatus(): boolean | undefined {
        return this['synchronized_status'];
    }
}