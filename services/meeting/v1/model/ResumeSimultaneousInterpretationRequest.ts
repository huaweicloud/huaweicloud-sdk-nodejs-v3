import { RestSimultaneousInterpretationBody } from './RestSimultaneousInterpretationBody';


export class ResumeSimultaneousInterpretationRequest {
    public conferenceID?: string;
    private 'X-Conference-Authorization'?: string;
    public body?: RestSimultaneousInterpretationBody;
    public constructor(conferenceID?: string, xConferenceAuthorization?: string) { 
        this['conferenceID'] = conferenceID;
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public withConferenceID(conferenceID: string): ResumeSimultaneousInterpretationRequest {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withXConferenceAuthorization(xConferenceAuthorization: string): ResumeSimultaneousInterpretationRequest {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
        return this;
    }
    public set xConferenceAuthorization(xConferenceAuthorization: string  | undefined) {
        this['X-Conference-Authorization'] = xConferenceAuthorization;
    }
    public get xConferenceAuthorization(): string | undefined {
        return this['X-Conference-Authorization'];
    }
    public withBody(body: RestSimultaneousInterpretationBody): ResumeSimultaneousInterpretationRequest {
        this['body'] = body;
        return this;
    }
}