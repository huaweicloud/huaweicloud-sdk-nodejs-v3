

export class NodeExtendParam {
    private 'ecs:performancetype'?: string | undefined;
    public orderID?: string;
    public productID?: string;
    public maxPods?: number;
    public periodType?: string;
    public periodNum?: number;
    public isAutoRenew?: string;
    public isAutoPay?: string;
    private 'DockerLVMConfigOverride'?: string | undefined;
    public dockerBaseSize?: number;
    public publicKey?: string;
    private 'alpha.cce/preInstall'?: string | undefined;
    private 'alpha.cce/postInstall'?: string | undefined;
    private 'alpha.cce/NodeImageID'?: string | undefined;
    public nicMultiqueue?: string;
    public nicThreshold?: string;
    private 'enterprise_project_id'?: string | undefined;
    public chargingMode?: number;
    public constructor() { 
    }
    public withEcsPerformancetype(ecsPerformancetype: string): NodeExtendParam {
        this['ecs:performancetype'] = ecsPerformancetype;
        return this;
    }
    public set ecsPerformancetype(ecsPerformancetype: string | undefined) {
        this['ecs:performancetype'] = ecsPerformancetype;
    }
    public get ecsPerformancetype() {
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
    public set dockerLVMConfigOverride(dockerLVMConfigOverride: string | undefined) {
        this['DockerLVMConfigOverride'] = dockerLVMConfigOverride;
    }
    public get dockerLVMConfigOverride() {
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
    public set alphaCcePreInstall(alphaCcePreInstall: string | undefined) {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
    }
    public get alphaCcePreInstall() {
        return this['alpha.cce/preInstall'];
    }
    public withAlphaCcePostInstall(alphaCcePostInstall: string): NodeExtendParam {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
        return this;
    }
    public set alphaCcePostInstall(alphaCcePostInstall: string | undefined) {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
    }
    public get alphaCcePostInstall() {
        return this['alpha.cce/postInstall'];
    }
    public withAlphaCceNodeImageID(alphaCceNodeImageID: string): NodeExtendParam {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
        return this;
    }
    public set alphaCceNodeImageID(alphaCceNodeImageID: string | undefined) {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
    }
    public get alphaCceNodeImageID() {
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
    public withEnterpriseProjectId(enterpriseProjectId: string): NodeExtendParam {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withChargingMode(chargingMode: number): NodeExtendParam {
        this['chargingMode'] = chargingMode;
        return this;
    }
}