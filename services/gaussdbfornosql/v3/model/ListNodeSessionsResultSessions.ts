

export class ListNodeSessionsResultSessions {
    public id?: string;
    public name?: string;
    public cmd?: string;
    public age?: string;
    public idle?: string;
    public db?: string;
    public addr?: string;
    public fd?: string;
    public sub?: string;
    public psub?: string;
    public multi?: string;
    public constructor() { 
    }
    public withId(id: string): ListNodeSessionsResultSessions {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListNodeSessionsResultSessions {
        this['name'] = name;
        return this;
    }
    public withCmd(cmd: string): ListNodeSessionsResultSessions {
        this['cmd'] = cmd;
        return this;
    }
    public withAge(age: string): ListNodeSessionsResultSessions {
        this['age'] = age;
        return this;
    }
    public withIdle(idle: string): ListNodeSessionsResultSessions {
        this['idle'] = idle;
        return this;
    }
    public withDb(db: string): ListNodeSessionsResultSessions {
        this['db'] = db;
        return this;
    }
    public withAddr(addr: string): ListNodeSessionsResultSessions {
        this['addr'] = addr;
        return this;
    }
    public withFd(fd: string): ListNodeSessionsResultSessions {
        this['fd'] = fd;
        return this;
    }
    public withSub(sub: string): ListNodeSessionsResultSessions {
        this['sub'] = sub;
        return this;
    }
    public withPsub(psub: string): ListNodeSessionsResultSessions {
        this['psub'] = psub;
        return this;
    }
    public withMulti(multi: string): ListNodeSessionsResultSessions {
        this['multi'] = multi;
        return this;
    }
}