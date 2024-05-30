

export class EngineCreateReqFlavorType {
    public nodeFlavor?: Array<string>;
    public flavor?: string;
    public availablePrefix?: string;
    public availableCpuMemory?: string;
    public specType?: string;
    public linear?: boolean;
    public licenseAmount?: number;
    public nodeLimit?: string;
    public id?: string;
    public microGatewayFlavor?: string;
    public disable?: boolean;
    public spec?: string;
    public cloudServiceType?: string;
    public currentflavor?: string;
    public constructor() { 
    }
    public withNodeFlavor(nodeFlavor: Array<string>): EngineCreateReqFlavorType {
        this['nodeFlavor'] = nodeFlavor;
        return this;
    }
    public withFlavor(flavor: string): EngineCreateReqFlavorType {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailablePrefix(availablePrefix: string): EngineCreateReqFlavorType {
        this['availablePrefix'] = availablePrefix;
        return this;
    }
    public withAvailableCpuMemory(availableCpuMemory: string): EngineCreateReqFlavorType {
        this['availableCpuMemory'] = availableCpuMemory;
        return this;
    }
    public withSpecType(specType: string): EngineCreateReqFlavorType {
        this['specType'] = specType;
        return this;
    }
    public withLinear(linear: boolean): EngineCreateReqFlavorType {
        this['linear'] = linear;
        return this;
    }
    public withLicenseAmount(licenseAmount: number): EngineCreateReqFlavorType {
        this['licenseAmount'] = licenseAmount;
        return this;
    }
    public withNodeLimit(nodeLimit: string): EngineCreateReqFlavorType {
        this['nodeLimit'] = nodeLimit;
        return this;
    }
    public withId(id: string): EngineCreateReqFlavorType {
        this['id'] = id;
        return this;
    }
    public withMicroGatewayFlavor(microGatewayFlavor: string): EngineCreateReqFlavorType {
        this['microGatewayFlavor'] = microGatewayFlavor;
        return this;
    }
    public withDisable(disable: boolean): EngineCreateReqFlavorType {
        this['disable'] = disable;
        return this;
    }
    public withSpec(spec: string): EngineCreateReqFlavorType {
        this['spec'] = spec;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): EngineCreateReqFlavorType {
        this['cloudServiceType'] = cloudServiceType;
        return this;
    }
    public withCurrentflavor(currentflavor: string): EngineCreateReqFlavorType {
        this['currentflavor'] = currentflavor;
        return this;
    }
}