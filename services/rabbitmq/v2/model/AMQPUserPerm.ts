

export class AMQPUserPerm {
    public vhost?: string;
    public conf?: string;
    public write?: string;
    public read?: string;
    public constructor() { 
    }
    public withVhost(vhost: string): AMQPUserPerm {
        this['vhost'] = vhost;
        return this;
    }
    public withConf(conf: string): AMQPUserPerm {
        this['conf'] = conf;
        return this;
    }
    public withWrite(write: string): AMQPUserPerm {
        this['write'] = write;
        return this;
    }
    public withRead(read: string): AMQPUserPerm {
        this['read'] = read;
        return this;
    }
}