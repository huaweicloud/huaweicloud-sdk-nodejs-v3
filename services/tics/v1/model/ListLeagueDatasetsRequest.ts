

export class ListLeagueDatasetsRequest {
    private 'league_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'dataset_name'?: string;
    private 'partner_name'?: string;
    public constructor(leagueId?: string, offset?: number, limit?: number) { 
        this['league_id'] = leagueId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withLeagueId(leagueId: string): ListLeagueDatasetsRequest {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withOffset(offset: number): ListLeagueDatasetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLeagueDatasetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withDatasetName(datasetName: string): ListLeagueDatasetsRequest {
        this['dataset_name'] = datasetName;
        return this;
    }
    public set datasetName(datasetName: string  | undefined) {
        this['dataset_name'] = datasetName;
    }
    public get datasetName(): string | undefined {
        return this['dataset_name'];
    }
    public withPartnerName(partnerName: string): ListLeagueDatasetsRequest {
        this['partner_name'] = partnerName;
        return this;
    }
    public set partnerName(partnerName: string  | undefined) {
        this['partner_name'] = partnerName;
    }
    public get partnerName(): string | undefined {
        return this['partner_name'];
    }
}