import { EcsServerInfo } from './EcsServerInfo';


export class AssociateKeypairRequestBody {
    private 'keypair_name': string | undefined;
    public server: EcsServerInfo;
    public constructor(keypairName?: any, server?: any) { 
        this['keypair_name'] = keypairName;
        this['server'] = server;
    }
    public withKeypairName(keypairName: string): AssociateKeypairRequestBody {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName() {
        return this['keypair_name'];
    }
    public withServer(server: EcsServerInfo): AssociateKeypairRequestBody {
        this['server'] = server;
        return this;
    }
}