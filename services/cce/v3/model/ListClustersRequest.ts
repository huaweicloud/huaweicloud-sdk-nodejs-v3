

export class ListClustersRequest {
    private 'Content-Type': string | undefined;
    public detail?: string;
    public status?: ListClustersRequestStatusEnum;
    public type?: ListClustersRequestTypeEnum;
    public version?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListClustersRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withDetail(detail: string): ListClustersRequest {
        this['detail'] = detail;
        return this;
    }
    public withStatus(status: ListClustersRequestStatusEnum): ListClustersRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: ListClustersRequestTypeEnum): ListClustersRequest {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListClustersRequest {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListClustersRequestStatusEnum {
    AVAILABLE = 'Available',
    UNAVAILABLE = 'Unavailable',
    SCALINGUP = 'ScalingUp',
    SCALINGDOWN = 'ScalingDown',
    CREATING = 'Creating',
    DELETING = 'Deleting',
    UPGRADING = 'Upgrading',
    RESIZING = 'Resizing',
    ROLLINGBACK = 'RollingBack',
    ROLLBACKFAILED = 'RollbackFailed',
    EMPTY = 'Empty'
}
/**
    * @export
    * @enum {string}
    */
export enum ListClustersRequestTypeEnum {
    VIRTUALMACHINE = 'VirtualMachine',
    ARM64 = 'ARM64'
}
