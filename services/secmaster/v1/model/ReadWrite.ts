import { HeartBeat } from './HeartBeat';


export class ReadWrite {
    private 'accept_count'?: number;
    private 'accept_rate'?: number;
    private 'channel_id'?: string;
    private 'channel_instance_count'?: number;
    private 'heart_beat'?: HeartBeat;
    private 'heart_beat_time'?: number;
    private 'latest_transmission_time'?: Date;
    private 'minion_id'?: string;
    private 'send_count'?: number;
    private 'send_rate'?: number;
    public constructor() { 
    }
    public withAcceptCount(acceptCount: number): ReadWrite {
        this['accept_count'] = acceptCount;
        return this;
    }
    public set acceptCount(acceptCount: number  | undefined) {
        this['accept_count'] = acceptCount;
    }
    public get acceptCount(): number | undefined {
        return this['accept_count'];
    }
    public withAcceptRate(acceptRate: number): ReadWrite {
        this['accept_rate'] = acceptRate;
        return this;
    }
    public set acceptRate(acceptRate: number  | undefined) {
        this['accept_rate'] = acceptRate;
    }
    public get acceptRate(): number | undefined {
        return this['accept_rate'];
    }
    public withChannelId(channelId: string): ReadWrite {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withChannelInstanceCount(channelInstanceCount: number): ReadWrite {
        this['channel_instance_count'] = channelInstanceCount;
        return this;
    }
    public set channelInstanceCount(channelInstanceCount: number  | undefined) {
        this['channel_instance_count'] = channelInstanceCount;
    }
    public get channelInstanceCount(): number | undefined {
        return this['channel_instance_count'];
    }
    public withHeartBeat(heartBeat: HeartBeat): ReadWrite {
        this['heart_beat'] = heartBeat;
        return this;
    }
    public set heartBeat(heartBeat: HeartBeat  | undefined) {
        this['heart_beat'] = heartBeat;
    }
    public get heartBeat(): HeartBeat | undefined {
        return this['heart_beat'];
    }
    public withHeartBeatTime(heartBeatTime: number): ReadWrite {
        this['heart_beat_time'] = heartBeatTime;
        return this;
    }
    public set heartBeatTime(heartBeatTime: number  | undefined) {
        this['heart_beat_time'] = heartBeatTime;
    }
    public get heartBeatTime(): number | undefined {
        return this['heart_beat_time'];
    }
    public withLatestTransmissionTime(latestTransmissionTime: Date): ReadWrite {
        this['latest_transmission_time'] = latestTransmissionTime;
        return this;
    }
    public set latestTransmissionTime(latestTransmissionTime: Date  | undefined) {
        this['latest_transmission_time'] = latestTransmissionTime;
    }
    public get latestTransmissionTime(): Date | undefined {
        return this['latest_transmission_time'];
    }
    public withMinionId(minionId: string): ReadWrite {
        this['minion_id'] = minionId;
        return this;
    }
    public set minionId(minionId: string  | undefined) {
        this['minion_id'] = minionId;
    }
    public get minionId(): string | undefined {
        return this['minion_id'];
    }
    public withSendCount(sendCount: number): ReadWrite {
        this['send_count'] = sendCount;
        return this;
    }
    public set sendCount(sendCount: number  | undefined) {
        this['send_count'] = sendCount;
    }
    public get sendCount(): number | undefined {
        return this['send_count'];
    }
    public withSendRate(sendRate: number): ReadWrite {
        this['send_rate'] = sendRate;
        return this;
    }
    public set sendRate(sendRate: number  | undefined) {
        this['send_rate'] = sendRate;
    }
    public get sendRate(): number | undefined {
        return this['send_rate'];
    }
}