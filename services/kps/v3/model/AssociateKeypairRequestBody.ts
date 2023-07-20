import { EcsServerInfo } from './EcsServerInfo';


export class AssociateKeypairRequestBody {
    private 'keypair_name'?: string;
    public server?: EcsServerInfo;
    public constructor(keypairName?: string, server?: EcsServerInfo) { 
        this['keypair_name'] = keypairName;
        this['server'] = server;
    }
    public withKeypairName(keypairName: string): AssociateKeypairRequestBody {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withServer(server: EcsServerInfo): AssociateKeypairRequestBody {
        this['server'] = server;
        return this;
    }
}