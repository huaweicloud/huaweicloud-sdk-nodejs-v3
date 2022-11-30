import { SecurityCompliance } from './SecurityCompliance';


export class Config {
    private 'security_compliance': SecurityCompliance | undefined;
    public constructor(securityCompliance?: any) { 
        this['security_compliance'] = securityCompliance;
    }
    public withSecurityCompliance(securityCompliance: SecurityCompliance): Config {
        this['security_compliance'] = securityCompliance;
        return this;
    }
    public set securityCompliance(securityCompliance: SecurityCompliance | undefined) {
        this['security_compliance'] = securityCompliance;
    }
    public get securityCompliance() {
        return this['security_compliance'];
    }
}