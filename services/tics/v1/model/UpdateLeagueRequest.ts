import { LeagueUpdateVo } from './LeagueUpdateVo';


export class UpdateLeagueRequest {
    private 'league_id'?: string;
    public body?: LeagueUpdateVo;
    public constructor(leagueId?: string) { 
        this['league_id'] = leagueId;
    }
    public withLeagueId(leagueId: string): UpdateLeagueRequest {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withBody(body: LeagueUpdateVo): UpdateLeagueRequest {
        this['body'] = body;
        return this;
    }
}