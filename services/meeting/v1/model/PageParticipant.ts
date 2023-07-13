import { ParticipantInfo } from './ParticipantInfo';


export class PageParticipant {
    public data?: Array<ParticipantInfo>;
    public offset?: number;
    public limit?: number;
    public count?: number;
    public constructor() { 
    }
    public withData(data: Array<ParticipantInfo>): PageParticipant {
        this['data'] = data;
        return this;
    }
    public withOffset(offset: number): PageParticipant {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): PageParticipant {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): PageParticipant {
        this['count'] = count;
        return this;
    }
}