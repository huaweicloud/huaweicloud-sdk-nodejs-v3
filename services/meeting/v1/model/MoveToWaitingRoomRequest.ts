import { RestMoveToWaitingRoomReqBody } from './RestMoveToWaitingRoomReqBody';


export class MoveToWaitingRoomRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestMoveToWaitingRoomReqBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): MoveToWaitingRoomRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): MoveToWaitingRoomRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestMoveToWaitingRoomReqBody): MoveToWaitingRoomRequest {
        this['body'] = body;
        return this;
    }
}