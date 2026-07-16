import { AuthenticatingProxy } from './AuthenticatingProxy';


export class RotateCredentialsRequestBody {
    public component?: string;
    public certificateExpirationTime?: number;
    public certContent?: AuthenticatingProxy;
    public constructor(component?: string) { 
        this['component'] = component;
    }
    public withComponent(component: string): RotateCredentialsRequestBody {
        this['component'] = component;
        return this;
    }
    public withCertificateExpirationTime(certificateExpirationTime: number): RotateCredentialsRequestBody {
        this['certificateExpirationTime'] = certificateExpirationTime;
        return this;
    }
    public withCertContent(certContent: AuthenticatingProxy): RotateCredentialsRequestBody {
        this['certContent'] = certContent;
        return this;
    }
}