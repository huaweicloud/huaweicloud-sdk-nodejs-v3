import { ClientIpInfo } from './ClientIpInfo';


export class ShowClientIpInfoRequestBody {
    private 'get_client_ips'?: ClientIpInfo;
    public constructor(getClientIps?: ClientIpInfo) { 
        this['get_client_ips'] = getClientIps;
    }
    public withGetClientIps(getClientIps: ClientIpInfo): ShowClientIpInfoRequestBody {
        this['get_client_ips'] = getClientIps;
        return this;
    }
    public set getClientIps(getClientIps: ClientIpInfo  | undefined) {
        this['get_client_ips'] = getClientIps;
    }
    public get getClientIps(): ClientIpInfo | undefined {
        return this['get_client_ips'];
    }
}