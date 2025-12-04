import { ReqUpdateDehMessage } from './ReqUpdateDehMessage';


export class ReqUpdateDeh {
    private 'dedicated_host'?: ReqUpdateDehMessage;
    public constructor(dedicatedHost?: ReqUpdateDehMessage) { 
        this['dedicated_host'] = dedicatedHost;
    }
    public withDedicatedHost(dedicatedHost: ReqUpdateDehMessage): ReqUpdateDeh {
        this['dedicated_host'] = dedicatedHost;
        return this;
    }
    public set dedicatedHost(dedicatedHost: ReqUpdateDehMessage  | undefined) {
        this['dedicated_host'] = dedicatedHost;
    }
    public get dedicatedHost(): ReqUpdateDehMessage | undefined {
        return this['dedicated_host'];
    }
}