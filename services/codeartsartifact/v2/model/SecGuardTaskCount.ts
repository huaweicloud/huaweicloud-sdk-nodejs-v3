import { MalwareCount } from './MalwareCount';
import { OpensourceCount } from './OpensourceCount';
import { SecGuardTaskDetail } from './SecGuardTaskDetail';


export class SecGuardTaskCount {
    public task?: number;
    public artifact?: number;
    public opensource?: OpensourceCount;
    public virus?: number;
    public malware?: MalwareCount;
    public total?: number;
    public list?: Array<SecGuardTaskDetail>;
    public constructor() { 
    }
    public withTask(task: number): SecGuardTaskCount {
        this['task'] = task;
        return this;
    }
    public withArtifact(artifact: number): SecGuardTaskCount {
        this['artifact'] = artifact;
        return this;
    }
    public withOpensource(opensource: OpensourceCount): SecGuardTaskCount {
        this['opensource'] = opensource;
        return this;
    }
    public withVirus(virus: number): SecGuardTaskCount {
        this['virus'] = virus;
        return this;
    }
    public withMalware(malware: MalwareCount): SecGuardTaskCount {
        this['malware'] = malware;
        return this;
    }
    public withTotal(total: number): SecGuardTaskCount {
        this['total'] = total;
        return this;
    }
    public withList(list: Array<SecGuardTaskDetail>): SecGuardTaskCount {
        this['list'] = list;
        return this;
    }
}