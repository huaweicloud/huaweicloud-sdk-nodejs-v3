

export class NodePoolUpdateExtendParam {
    private 'agency_name'?: string;
    private 'alpha.cce/preInstall'?: string;
    private 'alpha.cce/postInstall'?: string;
    public spotPrice?: string;
    public securityReinforcementType?: NodePoolUpdateExtendParamSecurityReinforcementTypeEnum | string;
    public constructor() { 
    }
    public withAgencyName(agencyName: string): NodePoolUpdateExtendParam {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withAlphaCcePreInstall(alphaCcePreInstall: string): NodePoolUpdateExtendParam {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
        return this;
    }
    public set alphaCcePreInstall(alphaCcePreInstall: string  | undefined) {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
    }
    public get alphaCcePreInstall(): string | undefined {
        return this['alpha.cce/preInstall'];
    }
    public withAlphaCcePostInstall(alphaCcePostInstall: string): NodePoolUpdateExtendParam {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
        return this;
    }
    public set alphaCcePostInstall(alphaCcePostInstall: string  | undefined) {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
    }
    public get alphaCcePostInstall(): string | undefined {
        return this['alpha.cce/postInstall'];
    }
    public withSpotPrice(spotPrice: string): NodePoolUpdateExtendParam {
        this['spotPrice'] = spotPrice;
        return this;
    }
    public withSecurityReinforcementType(securityReinforcementType: NodePoolUpdateExtendParamSecurityReinforcementTypeEnum | string): NodePoolUpdateExtendParam {
        this['securityReinforcementType'] = securityReinforcementType;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodePoolUpdateExtendParamSecurityReinforcementTypeEnum {
    NULL = 'null',
    CYBERSECURITY = 'cybersecurity'
}
