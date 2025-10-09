

export class GetClusterFlavorSpecsRequest {
    private 'Content-Type'?: string;
    public clusterType?: GetClusterFlavorSpecsRequestClusterTypeEnum | string;
    public constructor(contentType?: string, clusterType?: string) { 
        this['Content-Type'] = contentType;
        this['clusterType'] = clusterType;
    }
    public withContentType(contentType: string): GetClusterFlavorSpecsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withClusterType(clusterType: GetClusterFlavorSpecsRequestClusterTypeEnum | string): GetClusterFlavorSpecsRequest {
        this['clusterType'] = clusterType;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetClusterFlavorSpecsRequestClusterTypeEnum {
    VIRTUALMACHINE = 'VirtualMachine',
    ARM64 = 'ARM64'
}
