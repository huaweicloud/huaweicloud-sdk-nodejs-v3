import { RestBatchMoveToWaitingRoomReqBody } from './RestBatchMoveToWaitingRoomReqBody';


export class BatchMoveToWaitingRoomRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestBatchMoveToWaitingRoomReqBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): BatchMoveToWaitingRoomRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): BatchMoveToWaitingRoomRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestBatchMoveToWaitingRoomReqBody): BatchMoveToWaitingRoomRequest {
        this['body'] = body;
        return this;
    }
}