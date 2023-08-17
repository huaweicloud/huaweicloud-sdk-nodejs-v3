import { CreateHostedDirectConnect } from './CreateHostedDirectConnect';


export class CreateHostedDirectConnectRequestBody {
    private 'hosted_connect'?: CreateHostedDirectConnect;
    public constructor(hostedConnect?: CreateHostedDirectConnect) { 
        this['hosted_connect'] = hostedConnect;
    }
    public withHostedConnect(hostedConnect: CreateHostedDirectConnect): CreateHostedDirectConnectRequestBody {
        this['hosted_connect'] = hostedConnect;
        return this;
    }
    public set hostedConnect(hostedConnect: CreateHostedDirectConnect  | undefined) {
        this['hosted_connect'] = hostedConnect;
    }
    public get hostedConnect(): CreateHostedDirectConnect | undefined {
        return this['hosted_connect'];
    }
}