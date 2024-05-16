

export class ClientInfo {
    public id?: string;
    public addr?: string;
    public fd?: string;
    public name?: string;
    public cmd?: string;
    public age?: number;
    public idle?: number;
    public db?: string;
    public flags?: string;
    public sub?: number;
    public psub?: number;
    public multi?: number;
    public qbuf?: number;
    private 'qbuf_free'?: number;
    public obl?: number;
    public oll?: number;
    public omem?: number;
    public events?: ClientInfoEventsEnum | string;
    public network?: string;
    public peer?: string;
    public user?: string;
    public constructor() { 
    }
    public withId(id: string): ClientInfo {
        this['id'] = id;
        return this;
    }
    public withAddr(addr: string): ClientInfo {
        this['addr'] = addr;
        return this;
    }
    public withFd(fd: string): ClientInfo {
        this['fd'] = fd;
        return this;
    }
    public withName(name: string): ClientInfo {
        this['name'] = name;
        return this;
    }
    public withCmd(cmd: string): ClientInfo {
        this['cmd'] = cmd;
        return this;
    }
    public withAge(age: number): ClientInfo {
        this['age'] = age;
        return this;
    }
    public withIdle(idle: number): ClientInfo {
        this['idle'] = idle;
        return this;
    }
    public withDb(db: string): ClientInfo {
        this['db'] = db;
        return this;
    }
    public withFlags(flags: string): ClientInfo {
        this['flags'] = flags;
        return this;
    }
    public withSub(sub: number): ClientInfo {
        this['sub'] = sub;
        return this;
    }
    public withPsub(psub: number): ClientInfo {
        this['psub'] = psub;
        return this;
    }
    public withMulti(multi: number): ClientInfo {
        this['multi'] = multi;
        return this;
    }
    public withQbuf(qbuf: number): ClientInfo {
        this['qbuf'] = qbuf;
        return this;
    }
    public withQbufFree(qbufFree: number): ClientInfo {
        this['qbuf_free'] = qbufFree;
        return this;
    }
    public set qbufFree(qbufFree: number  | undefined) {
        this['qbuf_free'] = qbufFree;
    }
    public get qbufFree(): number | undefined {
        return this['qbuf_free'];
    }
    public withObl(obl: number): ClientInfo {
        this['obl'] = obl;
        return this;
    }
    public withOll(oll: number): ClientInfo {
        this['oll'] = oll;
        return this;
    }
    public withOmem(omem: number): ClientInfo {
        this['omem'] = omem;
        return this;
    }
    public withEvents(events: ClientInfoEventsEnum | string): ClientInfo {
        this['events'] = events;
        return this;
    }
    public withNetwork(network: string): ClientInfo {
        this['network'] = network;
        return this;
    }
    public withPeer(peer: string): ClientInfo {
        this['peer'] = peer;
        return this;
    }
    public withUser(user: string): ClientInfo {
        this['user'] = user;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClientInfoEventsEnum {
    R = 'r',
    W = 'w'
}
