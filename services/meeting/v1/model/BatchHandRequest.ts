import { RestBatchHandsUpReqBody } from './RestBatchHandsUpReqBody';


export class BatchHandRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestBatchHandsUpReqBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): BatchHandRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): BatchHandRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestBatchHandsUpReqBody): BatchHandRequest {
        this['body'] = body;
        return this;
    }
}