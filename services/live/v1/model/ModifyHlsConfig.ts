import { PushDomainApplication } from './PushDomainApplication';


export class ModifyHlsConfig {
    private 'push_domain'?: string;
    public application?: Array<PushDomainApplication>;
    public constructor(pushDomain?: string, application?: Array<PushDomainApplication>) { 
        this['push_domain'] = pushDomain;
        this['application'] = application;
    }
    public withPushDomain(pushDomain: string): ModifyHlsConfig {
        this['push_domain'] = pushDomain;
        return this;
    }
    public set pushDomain(pushDomain: string  | undefined) {
        this['push_domain'] = pushDomain;
    }
    public get pushDomain(): string | undefined {
        return this['push_domain'];
    }
    public withApplication(application: Array<PushDomainApplication>): ModifyHlsConfig {
        this['application'] = application;
        return this;
    }
}