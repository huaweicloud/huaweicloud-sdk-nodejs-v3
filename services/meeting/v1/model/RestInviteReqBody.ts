import { Attendee } from './Attendee';


export class RestInviteReqBody {
    public attendees: Array<Attendee>;
    public constructor(attendees?: any) { 
        this['attendees'] = attendees;
    }
    public withAttendees(attendees: Array<Attendee>): RestInviteReqBody {
        this['attendees'] = attendees;
        return this;
    }
}