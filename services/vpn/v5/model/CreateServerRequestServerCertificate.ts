

export class CreateServerRequestServerCertificate {
    public id?: string;
    public source?: CreateServerRequestServerCertificateSourceEnum | string;
    public constructor() { 
    }
    public withId(id: string): CreateServerRequestServerCertificate {
        this['id'] = id;
        return this;
    }
    public withSource(source: CreateServerRequestServerCertificateSourceEnum | string): CreateServerRequestServerCertificate {
        this['source'] = source;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateServerRequestServerCertificateSourceEnum {
    CCM = 'CCM',
    SERVICE_SIGN = 'SERVICE_SIGN'
}
