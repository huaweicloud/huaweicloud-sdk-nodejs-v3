

export class IntranetConnectionDeleteRequest {
    private 'intranet_connection_ids'?: Array<string>;
    public constructor(intranetConnectionIds?: Array<string>) { 
        this['intranet_connection_ids'] = intranetConnectionIds;
    }
    public withIntranetConnectionIds(intranetConnectionIds: Array<string>): IntranetConnectionDeleteRequest {
        this['intranet_connection_ids'] = intranetConnectionIds;
        return this;
    }
    public set intranetConnectionIds(intranetConnectionIds: Array<string>  | undefined) {
        this['intranet_connection_ids'] = intranetConnectionIds;
    }
    public get intranetConnectionIds(): Array<string> | undefined {
        return this['intranet_connection_ids'];
    }
}