

export class DeletePrivateNetworkSegmentsDto {
    private 'conf_ids'?: Array<string>;
    public constructor(confIds?: Array<string>) { 
        this['conf_ids'] = confIds;
    }
    public withConfIds(confIds: Array<string>): DeletePrivateNetworkSegmentsDto {
        this['conf_ids'] = confIds;
        return this;
    }
    public set confIds(confIds: Array<string>  | undefined) {
        this['conf_ids'] = confIds;
    }
    public get confIds(): Array<string> | undefined {
        return this['conf_ids'];
    }
}