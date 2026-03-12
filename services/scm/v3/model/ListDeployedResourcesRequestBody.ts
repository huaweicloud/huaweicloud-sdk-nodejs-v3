

export class ListDeployedResourcesRequestBody {
    private 'certificate_ids'?: Array<string>;
    private 'service_names'?: Array<string>;
    public constructor(certificateIds?: Array<string>, serviceNames?: Array<string>) { 
        this['certificate_ids'] = certificateIds;
        this['service_names'] = serviceNames;
    }
    public withCertificateIds(certificateIds: Array<string>): ListDeployedResourcesRequestBody {
        this['certificate_ids'] = certificateIds;
        return this;
    }
    public set certificateIds(certificateIds: Array<string>  | undefined) {
        this['certificate_ids'] = certificateIds;
    }
    public get certificateIds(): Array<string> | undefined {
        return this['certificate_ids'];
    }
    public withServiceNames(serviceNames: Array<string>): ListDeployedResourcesRequestBody {
        this['service_names'] = serviceNames;
        return this;
    }
    public set serviceNames(serviceNames: Array<string>  | undefined) {
        this['service_names'] = serviceNames;
    }
    public get serviceNames(): Array<string> | undefined {
        return this['service_names'];
    }
}