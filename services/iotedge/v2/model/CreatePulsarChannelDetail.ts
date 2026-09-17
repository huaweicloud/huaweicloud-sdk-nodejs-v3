import { PulsarConnectionInfo } from './PulsarConnectionInfo';
import { PulsarPushInfo } from './PulsarPushInfo';


export class CreatePulsarChannelDetail {
    private 'connection_info'?: PulsarConnectionInfo;
    private 'push_info'?: PulsarPushInfo;
    public constructor(connectionInfo?: PulsarConnectionInfo, pushInfo?: PulsarPushInfo) { 
        this['connection_info'] = connectionInfo;
        this['push_info'] = pushInfo;
    }
    public withConnectionInfo(connectionInfo: PulsarConnectionInfo): CreatePulsarChannelDetail {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: PulsarConnectionInfo  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): PulsarConnectionInfo | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: PulsarPushInfo): CreatePulsarChannelDetail {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: PulsarPushInfo  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): PulsarPushInfo | undefined {
        return this['push_info'];
    }
}