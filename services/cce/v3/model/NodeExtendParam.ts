

export class NodeExtendParam {
    private 'ecs:performancetype'?: string;
    public orderID?: string;
    public productID?: string;
    public maxPods?: number;
    public periodType?: string;
    public periodNum?: number;
    public isAutoRenew?: string;
    public isAutoPay?: string;
    private 'DockerLVMConfigOverride'?: string;
    public dockerBaseSize?: number;
    public publicKey?: string;
    private 'alpha.cce/preInstall'?: string;
    private 'alpha.cce/postInstall'?: string;
    private 'alpha.cce/NodeImageID'?: string;
    public nicMultiqueue?: string;
    public nicThreshold?: string;
    public chargingMode?: number;
    private 'agency_name'?: string;
    public kubeReservedMem?: number;
    public systemReservedMem?: number;
    private 'init-node-password'?: string;
    public securityReinforcementType?: NodeExtendParamSecurityReinforcementTypeEnum | string;
    public constructor() { 
    }
    public withEcsPerformancetype(ecsPerformancetype: string): NodeExtendParam {
        this['ecs:performancetype'] = ecsPerformancetype;
        return this;
    }
    public set ecsPerformancetype(ecsPerformancetype: string  | undefined) {
        this['ecs:performancetype'] = ecsPerformancetype;
    }
    public get ecsPerformancetype(): string | undefined {
        return this['ecs:performancetype'];
    }
    public withOrderID(orderID: string): NodeExtendParam {
        this['orderID'] = orderID;
        return this;
    }
    public withProductID(productID: string): NodeExtendParam {
        this['productID'] = productID;
        return this;
    }
    public withMaxPods(maxPods: number): NodeExtendParam {
        this['maxPods'] = maxPods;
        return this;
    }
    public withPeriodType(periodType: string): NodeExtendParam {
        this['periodType'] = periodType;
        return this;
    }
    public withPeriodNum(periodNum: number): NodeExtendParam {
        this['periodNum'] = periodNum;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: string): NodeExtendParam {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withIsAutoPay(isAutoPay: string): NodeExtendParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withDockerLVMConfigOverride(dockerLVMConfigOverride: string): NodeExtendParam {
        this['DockerLVMConfigOverride'] = dockerLVMConfigOverride;
        return this;
    }
    public set dockerLVMConfigOverride(dockerLVMConfigOverride: string  | undefined) {
        this['DockerLVMConfigOverride'] = dockerLVMConfigOverride;
    }
    public get dockerLVMConfigOverride(): string | undefined {
        return this['DockerLVMConfigOverride'];
    }
    public withDockerBaseSize(dockerBaseSize: number): NodeExtendParam {
        this['dockerBaseSize'] = dockerBaseSize;
        return this;
    }
    public withPublicKey(publicKey: string): NodeExtendParam {
        this['publicKey'] = publicKey;
        return this;
    }
    public withAlphaCcePreInstall(alphaCcePreInstall: string): NodeExtendParam {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
        return this;
    }
    public set alphaCcePreInstall(alphaCcePreInstall: string  | undefined) {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
    }
    public get alphaCcePreInstall(): string | undefined {
        return this['alpha.cce/preInstall'];
    }
    public withAlphaCcePostInstall(alphaCcePostInstall: string): NodeExtendParam {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
        return this;
    }
    public set alphaCcePostInstall(alphaCcePostInstall: string  | undefined) {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
    }
    public get alphaCcePostInstall(): string | undefined {
        return this['alpha.cce/postInstall'];
    }
    public withAlphaCceNodeImageID(alphaCceNodeImageID: string): NodeExtendParam {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
        return this;
    }
    public set alphaCceNodeImageID(alphaCceNodeImageID: string  | undefined) {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
    }
    public get alphaCceNodeImageID(): string | undefined {
        return this['alpha.cce/NodeImageID'];
    }
    public withNicMultiqueue(nicMultiqueue: string): NodeExtendParam {
        this['nicMultiqueue'] = nicMultiqueue;
        return this;
    }
    public withNicThreshold(nicThreshold: string): NodeExtendParam {
        this['nicThreshold'] = nicThreshold;
        return this;
    }
    public withChargingMode(chargingMode: number): NodeExtendParam {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withAgencyName(agencyName: string): NodeExtendParam {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withKubeReservedMem(kubeReservedMem: number): NodeExtendParam {
        this['kubeReservedMem'] = kubeReservedMem;
        return this;
    }
    public withSystemReservedMem(systemReservedMem: number): NodeExtendParam {
        this['systemReservedMem'] = systemReservedMem;
        return this;
    }
    public withInitNodePassword(initNodePassword: string): NodeExtendParam {
        this['init-node-password'] = initNodePassword;
        return this;
    }
    public set initNodePassword(initNodePassword: string  | undefined) {
        this['init-node-password'] = initNodePassword;
    }
    public get initNodePassword(): string | undefined {
        return this['init-node-password'];
    }
    public withSecurityReinforcementType(securityReinforcementType: NodeExtendParamSecurityReinforcementTypeEnum | string): NodeExtendParam {
        this['securityReinforcementType'] = securityReinforcementType;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeExtendParamSecurityReinforcementTypeEnum {
    NULL = 'null',
    CYBERSECURITY = 'cybersecurity'
}
