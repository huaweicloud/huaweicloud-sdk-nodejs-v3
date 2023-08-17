import { UpdateHostedDirectConnect } from './UpdateHostedDirectConnect';


export class UpdateHostedDirectConnectRequestBody {
    private 'hosted_connect'?: UpdateHostedDirectConnect;
    public constructor() { 
    }
    public withHostedConnect(hostedConnect: UpdateHostedDirectConnect): UpdateHostedDirectConnectRequestBody {
        this['hosted_connect'] = hostedConnect;
        return this;
    }
    public set hostedConnect(hostedConnect: UpdateHostedDirectConnect  | undefined) {
        this['hosted_connect'] = hostedConnect;
    }
    public get hostedConnect(): UpdateHostedDirectConnect | undefined {
        return this['hosted_connect'];
    }
}