import { AMQPUserPerm } from './AMQPUserPerm';


export class AMQPUser {
    private 'access_key'?: string;
    private 'secret_key'?: string;
    public vhosts?: Array<AMQPUserPerm>;
    public constructor(accessKey?: string, secretKey?: string, vhosts?: Array<AMQPUserPerm>) { 
        this['access_key'] = accessKey;
        this['secret_key'] = secretKey;
        this['vhosts'] = vhosts;
    }
    public withAccessKey(accessKey: string): AMQPUser {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): AMQPUser {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withVhosts(vhosts: Array<AMQPUserPerm>): AMQPUser {
        this['vhosts'] = vhosts;
        return this;
    }
}