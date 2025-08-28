

export class ComputeFlavors {
    public id?: string;
    public typeCode?: string;
    public code?: string;
    public iaasCode?: string;
    public cpu?: string;
    public mem?: string;
    public maxConnections?: string;
    public serverType?: string;
    public architecture?: string;
    public azStatus?: object;
    public regionStatus?: string;
    public groupType?: string;
    public dbType?: string;
    public extendFields?: object;
    public constructor() { 
    }
    public withId(id: string): ComputeFlavors {
        this['id'] = id;
        return this;
    }
    public withTypeCode(typeCode: string): ComputeFlavors {
        this['typeCode'] = typeCode;
        return this;
    }
    public withCode(code: string): ComputeFlavors {
        this['code'] = code;
        return this;
    }
    public withIaasCode(iaasCode: string): ComputeFlavors {
        this['iaasCode'] = iaasCode;
        return this;
    }
    public withCpu(cpu: string): ComputeFlavors {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): ComputeFlavors {
        this['mem'] = mem;
        return this;
    }
    public withMaxConnections(maxConnections: string): ComputeFlavors {
        this['maxConnections'] = maxConnections;
        return this;
    }
    public withServerType(serverType: string): ComputeFlavors {
        this['serverType'] = serverType;
        return this;
    }
    public withArchitecture(architecture: string): ComputeFlavors {
        this['architecture'] = architecture;
        return this;
    }
    public withAzStatus(azStatus: object): ComputeFlavors {
        this['azStatus'] = azStatus;
        return this;
    }
    public withRegionStatus(regionStatus: string): ComputeFlavors {
        this['regionStatus'] = regionStatus;
        return this;
    }
    public withGroupType(groupType: string): ComputeFlavors {
        this['groupType'] = groupType;
        return this;
    }
    public withDbType(dbType: string): ComputeFlavors {
        this['dbType'] = dbType;
        return this;
    }
    public withExtendFields(extendFields: object): ComputeFlavors {
        this['extendFields'] = extendFields;
        return this;
    }
}