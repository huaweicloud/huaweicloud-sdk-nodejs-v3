import { SecurityCompliance } from './SecurityCompliance';


export class Config {
    private 'security_compliance'?: SecurityCompliance;
    public constructor(securityCompliance?: SecurityCompliance) { 
        this['security_compliance'] = securityCompliance;
    }
    public withSecurityCompliance(securityCompliance: SecurityCompliance): Config {
        this['security_compliance'] = securityCompliance;
        return this;
    }
    public set securityCompliance(securityCompliance: SecurityCompliance  | undefined) {
        this['security_compliance'] = securityCompliance;
    }
    public get securityCompliance(): SecurityCompliance | undefined {
        return this['security_compliance'];
    }
}