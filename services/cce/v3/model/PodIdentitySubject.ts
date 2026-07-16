

export class PodIdentitySubject {
    public namespace?: string;
    public serviceAccount?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): PodIdentitySubject {
        this['namespace'] = namespace;
        return this;
    }
    public withServiceAccount(serviceAccount: string): PodIdentitySubject {
        this['serviceAccount'] = serviceAccount;
        return this;
    }
}