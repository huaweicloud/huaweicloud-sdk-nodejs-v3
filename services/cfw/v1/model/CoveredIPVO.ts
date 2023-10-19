

export class CoveredIPVO {
    public ip?: string;
    private 'covered_Ip'?: string;
    public constructor() { 
    }
    public withIp(ip: string): CoveredIPVO {
        this['ip'] = ip;
        return this;
    }
    public withCoveredIp(coveredIp: string): CoveredIPVO {
        this['covered_Ip'] = coveredIp;
        return this;
    }
    public set coveredIp(coveredIp: string  | undefined) {
        this['covered_Ip'] = coveredIp;
    }
    public get coveredIp(): string | undefined {
        return this['covered_Ip'];
    }
}