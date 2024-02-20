

export class UpdateFindingsReqBody {
    public ids?: Array<string>;
    private 'resource_urn'?: string;
    public status?: UpdateFindingsReqBodyStatusEnum | string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withIds(ids: Array<string>): UpdateFindingsReqBody {
        this['ids'] = ids;
        return this;
    }
    public withResourceUrn(resourceUrn: string): UpdateFindingsReqBody {
        this['resource_urn'] = resourceUrn;
        return this;
    }
    public set resourceUrn(resourceUrn: string  | undefined) {
        this['resource_urn'] = resourceUrn;
    }
    public get resourceUrn(): string | undefined {
        return this['resource_urn'];
    }
    public withStatus(status: UpdateFindingsReqBodyStatusEnum | string): UpdateFindingsReqBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFindingsReqBodyStatusEnum {
    ACTIVE = 'active',
    ARCHIVED = 'archived'
}
