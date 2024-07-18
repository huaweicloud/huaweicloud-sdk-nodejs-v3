

export class ListAutopilotClustersRequest {
    private 'Content-Type'?: string;
    public detail?: string;
    public status?: ListAutopilotClustersRequestStatusEnum | string;
    public type?: ListAutopilotClustersRequestTypeEnum | string;
    public version?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListAutopilotClustersRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withDetail(detail: string): ListAutopilotClustersRequest {
        this['detail'] = detail;
        return this;
    }
    public withStatus(status: ListAutopilotClustersRequestStatusEnum | string): ListAutopilotClustersRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: ListAutopilotClustersRequestTypeEnum | string): ListAutopilotClustersRequest {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListAutopilotClustersRequest {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAutopilotClustersRequestStatusEnum {
    AVAILABLE = 'Available',
    UNAVAILABLE = 'Unavailable',
    CREATING = 'Creating',
    DELETING = 'Deleting',
    UPGRADING = 'Upgrading',
    ROLLINGBACK = 'RollingBack',
    ROLLBACKFAILED = 'RollbackFailed',
    ERROR = 'Error'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAutopilotClustersRequestTypeEnum {
    VIRTUALMACHINE = 'VirtualMachine'
}
