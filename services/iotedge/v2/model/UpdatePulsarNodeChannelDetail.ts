import { UpdatePulsarNodeChannelConnectionInfo } from './UpdatePulsarNodeChannelConnectionInfo';
import { UpdatePulsarNodeChannelPushInfoDTO } from './UpdatePulsarNodeChannelPushInfoDTO';


export class UpdatePulsarNodeChannelDetail {
    private 'connection_info'?: UpdatePulsarNodeChannelConnectionInfo;
    private 'push_info'?: UpdatePulsarNodeChannelPushInfoDTO;
    public constructor() { 
    }
    public withConnectionInfo(connectionInfo: UpdatePulsarNodeChannelConnectionInfo): UpdatePulsarNodeChannelDetail {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: UpdatePulsarNodeChannelConnectionInfo  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): UpdatePulsarNodeChannelConnectionInfo | undefined {
        return this['connection_info'];
    }
    public withPushInfo(pushInfo: UpdatePulsarNodeChannelPushInfoDTO): UpdatePulsarNodeChannelDetail {
        this['push_info'] = pushInfo;
        return this;
    }
    public set pushInfo(pushInfo: UpdatePulsarNodeChannelPushInfoDTO  | undefined) {
        this['push_info'] = pushInfo;
    }
    public get pushInfo(): UpdatePulsarNodeChannelPushInfoDTO | undefined {
        return this['push_info'];
    }
}