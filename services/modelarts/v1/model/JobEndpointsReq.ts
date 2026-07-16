import { SSHReq } from './SSHReq';


export class JobEndpointsReq {
    public ssh?: SSHReq;
    public constructor() { 
    }
    public withSsh(ssh: SSHReq): JobEndpointsReq {
        this['ssh'] = ssh;
        return this;
    }
}